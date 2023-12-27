/** @odoo-module **/


import { registry } from "@web/core/registry";
import { woocommerceNotificationChannelName } from "../config";


const productNotification = {

    dependencies: ['bus_service', 'notification'],

    start(env, { bus_service, notification }) {

        bus_service.addChannel(woocommerceNotificationChannelName)

        bus_service.addEventListener('notification', ({ detail: notifications }) => {

            if (notifications[0].type === 'woocommerce_notification') {

                const notificationPayload = notifications[0].payload
                const notificationTime = notification.add(
                    notificationPayload.message,
                    {
                        title: notificationPayload.title,
                        type: notificationPayload.type,
                        sticky: notificationPayload.sticky
                    }
                )

                if (!notificationPayload.sticky)
                    setTimeout(notificationTime, notificationPayload.timeout)

            }

        });

        bus_service.start();
    }

};


registry.category("services").add("productNotification", productNotification);
