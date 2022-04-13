import React from "react";
import { Modal, Button, Text } from "@nextui-org/react";
import { Image } from "@nextui-org/react";

export default function App() {
  const [visible, setVisible] = React.useState(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <div>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header
          style={{ display: "flex", flexDirection: "column", gap: "5px" }}
        >
          <Text id="modal-title" size={18} style={{ margin: "0 10px" }}>
            Welcome to
            <Text b size={18}>
              Discord Clone
            </Text>
          </Text>
          <Image
            width={300}
            height={100}
            src="https://www.freepnglogos.com/uploads/discord-logo-png/discord-branding-2.png"
            alt="Default Image"
            objectFit="contain"
          />
        </Modal.Header>
        <Modal.Footer>
          <Button
            size="xl"
            style={{ margin: "0 auto", background: "var(--blue)" }}
          >
            Sign in with Google
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
