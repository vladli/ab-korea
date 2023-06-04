"use client";
import React, { useRef, useState } from "react";
import { Item, Menu } from "react-contexify";
import { toast } from "react-hot-toast";
import { Catalog } from "@prisma/client";
import { useRouter } from "next/navigation";

import Button from "@/components/Button";
import Modal from "@/components/Modal/Modal";
import { deleteCar } from "@/lib/cars";

export default function ContextMenu(props: Catalog) {
  const router = useRouter();
  const { id, Maker, Model } = props;
  const deleteRef = useRef<HTMLDialogElement>(null);
  function handleItemClick({ id: itemId }: any) {
    if (itemId === "delete" && deleteRef.current !== null) {
      deleteRef.current?.showModal();
    }
  }
  const handleDelete = async () => {
    const res = deleteCar(id);
    toast.promise(res, {
      loading: "Удаление автомобиля",
      success: () => {
        router.refresh();
        return "Автомобиль - удален";
      },
      error: "Произошла - ошибка",
    });
  };
  return (
    <>
      <Menu id={id}>
        <Item
          id="delete"
          onClick={handleItemClick}
        >
          Удалить
        </Item>
      </Menu>

      <Modal
        id="delete"
        ref={deleteRef}
      >
        <Modal.Header>Удаление авто из каталога</Modal.Header>
        <Modal.Body>
          <p className="font-medium">
            Вы уверены, что хотите удалить авто из каталога?
          </p>
          <br />
          <div className="flex flex-col">
            <span>ID: {id}</span>
            <span>
              Автомобиль: {Maker} {Model}
            </span>
          </div>
        </Modal.Body>
        <Modal.Actions>
          <Button
            color="secondary"
            onClick={handleDelete}
          >
            Удалить
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
}
