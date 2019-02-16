
new Vue({
    el: '#app',
    data: {
        location : "colorado springs",
        newAttendee: "",
        attendees : []
        },
    methods: {
        addAttendee: function() {
            this.attendees.push(this.newAttendee);
            this.newAttendee = "";
        }
    }
});
