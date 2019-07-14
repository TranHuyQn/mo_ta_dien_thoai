let mobile = function (name, battery, inbox, outbox, power) {
    this.battery = battery;
    this.inbox = inbox;
    this.outbox = outbox;
    this.power = power;
    this.name = name;

    this.onOff = function () {
        let powerBtnMobile = document.getElementById('powerBtn' + this.name);
        if (this.power == 'on') {
            this.power = 'off';
        } else {
            this.power = 'on';
        }
        if (this.power == 'on') {
            powerBtnMobile.innerHTML = 'Tăt';
        } else {
            powerBtnMobile.innerHTML = 'Bật';
        }
    };

    let screenMobile = document.getElementById('screen' + this.name);

    this.checkStatus = function () {
        if (this.power == 'on') {
            screenMobile.value = 'điện thoại đang bật. pin: ' + this.battery + '%';
        } else {
            screenMobile.value = 'điện thoại đang tắt';
        }
    };

    this.texting = function () {
        if (this.power == 'on') {
            if (this.battery > 0) {
                screenMobile.value = '';
                screenMobile.setAttribute('placeholder', 'soạn tin nhắn');
                screenMobile.removeAttribute('readonly');
                this.battery -= 1;
            } else {
                alert('điện thoại hết pin, sạc pin ngay!');
            }
        } else {
            alert('điện thoại đang tắt!');
        }
    };

    this.back = function () {
        screenMobile.value = '';
        screenMobile.setAttribute('placeholder', 'màn hình chính');
        screenMobile.setAttribute('readonly', 'true');
    };

    this.sentMsg = function () {
        if (this.power == 'on') {
            if (this.battery > 0) {
                if (screenMobile.value != '') {
                    this.outbox.push(screenMobile.value);
                    screenMobile.value = '';
                    this.battery -= 1;
                }
            } else {
                alert('điện thoại hết pin, sạc pin ngay!');
            }
        } else {
            alert('điện thoại đang tắt!');
        }
    };

    this.checkOutbox = function () {
        if (this.power == 'on') {
            if (this.battery > 0) {
                screenMobile.value = '';
                screenMobile.setAttribute('placeholder', 'Hộp thư đi');
                screenMobile.setAttribute('readonly', 'true');
                for (let i = 0; i < this.outbox.length; i++) {
                    screenMobile.value += this.outbox[i] + '\n\n';
                }
                this.battery -= 1;
            } else {
                alert('điện thoại hết pin, sạc pin ngay!');
            }
        } else {
            alert('điện thoại đang tắt!');
        }
    };

    this.checkInbox = function () {
        if (this.power == 'on') {
            if (this.battery > 0) {
                screenMobile.value = '';
                screenMobile.setAttribute('placeholder', 'Hộp thư đến');
                screenMobile.setAttribute('readonly', 'true');
                for (let i = 0; i < this.inbox.length; i++) {
                    screenMobile.value += this.inbox[i] + '\n\n';
                }
                this.battery -= 1;
            } else {
                alert('điện thoại hết pin, sạc pin ngay!');
            }
        } else {
            alert('điện thoại đang tắt!');
        }
    }

};

let nokiaName = 'Nokia';
let batteryNokia = 100;
let inboxNokia = [];
let outboxNokia = [];
let powerNokia = 'on';
let iphoneName = 'Iphone';
let batteryIphone = 100;
let inboxIphone = [];
let outboxIphone = [];
let powerIphone = 'on';
let nokia = new mobile(nokiaName, batteryNokia, inboxNokia, outboxNokia, powerNokia);
let iphone = new mobile(iphoneName, batteryIphone, inboxIphone, outboxIphone, powerIphone);

function onOff(mobile) {
    mobile.onOff();
}

function checkStatus(mobile) {
    mobile.checkStatus();
}

function texting(mobile) {
    mobile.texting();
}

function back(mobile) {
    mobile.back();
}

function sentMsg(mobile) {
    mobile.sentMsg();
    switch (mobile) {
        case nokia:
            iphone.inbox = nokia.outbox;
            break;
        case iphone:
            nokia.inbox = iphone.outbox;
            break;
    }
}

function checkOutbox(mobile) {
    mobile.checkOutbox();
}

function checkInbox(mobile) {
    mobile.checkInbox();
}

