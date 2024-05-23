import { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";

const DonasiAccorComp = () => {
  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div>
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">
            Cerita Penggalangan Dana
          </AccordionHeader>
          <AccordionBody accordionId="1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vel,
            vitae repellat nam illum omnis optio doloremque mollitia labore quod
            magni, fugit sapiente officia repellendus voluptatem. Sequi ipsum
            possimus mollitia? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Repellat, doloribus quia commodi assumenda laborum
            corporis possimus illum facere est sit autem eligendi tempore neque
            temporibus quaerat veritatis laudantium fuga dolores. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Facere deserunt
            voluptatem explicabo, quia exercitationem, nam quidem veniam maiores
            cumque quaerat harum illo saepe labore ipsam accusantium quae
            dolorem nostrum eos?
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">Penyaluran Dana</AccordionHeader>
          <AccordionBody accordionId="2">
            <strong>This is the second item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default DonasiAccorComp;
