import React, {useState} from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

export default function ModalPage() {

    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = (<div>
        <Button onClick={handleClose} primary>I accept</Button>
    </div>);
    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            Here is an important agreement fot you to accept
        </p>
    </Modal>;

    return (
        <div className={"relative"}>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus, nunc at egestas sodales, erat
                sem bibendum nibh, ac elementum ante lacus vitae sapien. Cras risus urna, lacinia quis accumsan eget,
                molestie in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                egestas. Integer vehicula accumsan risus et pellentesque. Vestibulum neque nulla, consectetur quis ante
                non, porta efficitur justo. Integer tincidunt auctor lectus vel ullamcorper. Proin ac orci molestie,
                ultrices neque sit amet, porttitor dui. Donec ut tincidunt urna. Aliquam et interdum nibh.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus, nunc at egestas sodales, erat
                sem bibendum nibh, ac elementum ante lacus vitae sapien. Cras risus urna, lacinia quis accumsan eget,
                molestie in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                egestas. Integer vehicula accumsan risus et pellentesque. Vestibulum neque nulla, consectetur quis ante
                non, porta efficitur justo. Integer tincidunt auctor lectus vel ullamcorper. Proin ac orci molestie,
                ultrices neque sit amet, porttitor dui. Donec ut tincidunt urna. Aliquam et interdum nibh.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus, nunc at egestas sodales, erat
                sem bibendum nibh, ac elementum ante lacus vitae sapien. Cras risus urna, lacinia quis accumsan eget,
                molestie in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                egestas. Integer vehicula accumsan risus et pellentesque. Vestibulum neque nulla, consectetur quis ante
                non, porta efficitur justo. Integer tincidunt auctor lectus vel ullamcorper. Proin ac orci molestie,
                ultrices neque sit amet, porttitor dui. Donec ut tincidunt urna. Aliquam et interdum nibh.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus, nunc at egestas sodales, erat
                sem bibendum nibh, ac elementum ante lacus vitae sapien. Cras risus urna, lacinia quis accumsan eget,
                molestie in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                egestas. Integer vehicula accumsan risus et pellentesque. Vestibulum neque nulla, consectetur quis ante
                non, porta efficitur justo. Integer tincidunt auctor lectus vel ullamcorper. Proin ac orci molestie,
                ultrices neque sit amet, porttitor dui. Donec ut tincidunt urna. Aliquam et interdum nibh.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus, nunc at egestas sodales, erat
                sem bibendum nibh, ac elementum ante lacus vitae sapien. Cras risus urna, lacinia quis accumsan eget,
                molestie in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                egestas. Integer vehicula accumsan risus et pellentesque. Vestibulum neque nulla, consectetur quis ante
                non, porta efficitur justo. Integer tincidunt auctor lectus vel ullamcorper. Proin ac orci molestie,
                ultrices neque sit amet, porttitor dui. Donec ut tincidunt urna. Aliquam et interdum nibh.
            </p>

            <Button primary onClick={handleClick}>Open Modal</Button>
            {showModal && modal}
        </div>
    )
}