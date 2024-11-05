import React from 'react';

const Accordion = () => {
    return (
        <div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">1. What types of products are available on Gadget Heaven?</div>
                <div className="collapse-content">
                    <p>We offer a wide variety of gadgets, including laptops, phones, smartwatches, MacBooks, and other tech accessories to meet your digital needs.</p>
                </div>
            </div>

            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">2. How can I track my order?</div>
                <div className="collapse-content">
                    <p>You can track your order by going to the "Dashboard" page on our site .</p>
                </div>
            </div>

            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">3. What payment methods do you accept?</div>
                <div className="collapse-content">
                    <p>Initially , we didn't implement payment gateway but you can pay us by Bkash, Nagad.</p>
                </div>
            </div>

            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">4. Do you offer international shipping?</div>
                <div className="collapse-content">
                    <p>We do not but the process is on going.</p>
                </div>
            </div>


            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">5. Are the products on Gadget Heaven authentic?</div>
                <div className="collapse-content">
                    <p>Yes, all products sold on Gadget Heaven are 100% authentic and sourced directly from reputable brands and suppliers.</p>
                </div>
            </div>

            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">6. Is there a warranty on the products?</div>
                <div className="collapse-content">
                    <p>No, there is no warranty on any product.</p>
                </div>
            </div>

            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">7. How do I contact customer support?</div>
                <div className="collapse-content">
                    <p>You can reach out to our customer support team via the support page, where we offer support through email.</p>
                </div>
            </div>

            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">8. Do you offer any discounts or promotions?</div>
                <div className="collapse-content">
                    <p>No, we do offer as it is a new company.</p>
                </div>
            </div>

            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">9. Can I create a wishlist for my favorite products?</div>
                <div className="collapse-content">
                    <p>Yes, users can save products to their wishlist for easy access and to keep track of items they’re interested in purchasing later.</p>
                </div>
            </div>

            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">10. How do I know if a product is in stock?</div>
                <div className="collapse-content">
                    <p>Product availability is shown on each product details page. to know that you just have to press view detail button</p>
                </div>
            </div>

        </div>
    );
};

export default Accordion;