import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">

      <div className="container" id="contact__container">
      
        <div className="phone">
          <a href="https://justcall.io/product/lp/sales-dialer-v1/?utm_source=adwords&utm_campaign=15520945427&utm_medium=cpc&utm_term=phone%20dialer&utm_content=692149048934&hsa_acc=2345718846&hsa_cam=15520945427&hsa_grp=130155965719&hsa_ad=692149048934&hsa_src=g&hsa_tgt=kwd-10350770&hsa_kw=phone%20dialer&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAiAiOa9BhBqEiwABCdG84PUdWaJ4x_lYAEN3JEjUQ4u63ow_wPLYVUiztgTsFHzUOJYgiiwgBoCBgUQAvD_BwE" className="btn">
            <span className="number_span">613-600-4850</span>
          </a>
        </div> 
        
        <div className="email">
          <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJlDSfnlFcKdszXZlNrvFRtwrWgWFsdQVcRrhBZXKDhgfVRxqlnrvMPxLDkwwxfLthvtFSV" target="blank" className="btn">
            <span className="number_span">javed.alimzai@gmail.com</span>
          </a>
        </div>
      
      </div>
    </section>
  );
};

export default Contact;