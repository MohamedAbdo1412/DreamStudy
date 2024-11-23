 // تفعيل زر PayPal لكل خطة
 paypal.Buttons({
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '300' // هذا هو السعر بعد الخصم لخطة الرحلة
                }
            }]
        });
    },
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            alert('تم الدفع بنجاح! شكراً لك، ' + details.payer.name.given_name);
        });
    }
}).render('#paypal-button-container-1'); // زر الدفع لخطة الرحلة

paypal.Buttons({
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '360' // هذا هو السعر بعد الخصم للخطة الحكومية
                }
            }]
        });
    },
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            alert('تم الدفع بنجاح! شكراً لك، ' + details.payer.name.given_name);
        });
    }
}).render('#paypal-button-container-2'); // زر الدفع للخطة الحكومية

paypal.Buttons({
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '400' // هذا هو السعر بعد الخصم لخطة السكن
                }
            }]
        });
    },
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            alert('تم الدفع بنجاح! شكراً لك، ' + details.payer.name.given_name);
        });
    }
}).render('#paypal-button-container-3'); // زر الدفع لخطة السكن