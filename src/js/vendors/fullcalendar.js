$(document).ready(function () {
    //---------------------------------
    //  Widget
    //---------------------------------
    if($('#widget-calendar-body')[0]) {
        var calendarEl = document.getElementById('widget-calendar-body');
        var date = new Date();
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        var calendar = new FullCalendar.Calendar(calendarEl, {
            plugins: ['dayGrid'],
            header: {
                right: 'next',
                center: 'title',
                left: 'prev'
            },
            defaultDate: '2020-08-12',
            events: [
                {
                    title: 'Dolor Pellentesque',
                    start: '2020-08-01'
                },
                {
                    title: 'Purus Nibh',
                    start: '2020-08-07'
                },
                {
                    title: 'Amet Condimentum',
                    start: '2020-08-09'
                },
                {
                    title: 'Tellus',
                    start: '2020-08-12'
                },
                {
                    title: 'Vestibulum',
                    start: '2020-08-18'
                },
                {
                    title: 'Ipsum',
                    start: '2020-08-24'
                },
                {
                    title: 'Fringilla Sit',
                    start: '2020-08-27'
                },
                {
                    title: 'Amet Pharetra',
                    url: 'http://google.com/',
                    start: '2020-08-30'
                }
            ]
        });

        calendar.render();

        //Display Current Date as Calendar widget header
        $('.widget-calendar__year').html(date.getFullYear());
        $('.widget-calendar__day').html(days[date.getDay()] + ', ' + months[date.getMonth()].substring(0, 3) + ' ' + date.getDay());
    }


    //---------------------------------
    //  Page
    //---------------------------------
    if($('#calendar')[0]) {
        var calendarEl = document.getElementById('calendar');
        var calendarTitle = document.getElementById('calendar-title');
        var date = new Date();
        var month = date.getMonth();
        var year = date.getFullYear();
        var editEventID;
        var addEventDate;
        var events = [

            {
                id: 1,
                title: 'Fusce dapibus tellus',
                start: new Date(year, month, 1),
                allDay: true,
                description: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
            },
            {
                id: 2,
                title: 'Fusce dapibus tellus',
                start: new Date(year, month, 10),
                allDay: true,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                id: 3,
                title: 'Egestas Justo',
                start: new Date(year, month, 18),
                allDay: true,
                description: ''
            },
            {
                id: 4,
                title: 'Bibendum Vehicula Quam',
                start: new Date(year, month, 20),
                allDay: true,
                description: ''
            },
            {
                id: 5,
                title: 'Venenatis Dolor Porta',
                start: new Date(year, month, 5),
                allDay: true,
                description: 'Sed posuere consectetur est at lobortis. Nullam quis risus eget urna mollis ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur. Donec ullamcorper nulla non metus auctor fringilla. Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.'
            },
            {
                id: 6,
                title: 'Sem Pharetra',
                start: new Date(year, month, 21),
                allDay: true,
                description: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
            },
            {
                id: 7,
                title: 'Ullamcorper Porta',
                start: new Date(year, month, 5),
                allDay: true,
                description: 'Malesuada Ullamcorper Nullam'
            },
            {
                id: 8,
                title: 'Egestas',
                start: new Date(year, month, 5),
                allDay: true,
                description: ''
            },
            {
                id: 9,
                title: 'Purus',
                start: new Date(year, month, 1),
                allDay: true,
                description: 'Sed posuere consectetur est at lobortis. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.'
            },
            {
                id: 10,
                title: 'Risus Elit',
                start: new Date(year, month, 15),
                allDay: true,
                description: 'Etiam porta sem malesuada magna mollis euismod. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.'
            },
            {
                id: 11,
                title: 'Risus Fermentum Justo',
                start: new Date(year, month, 25),
                allDay: true,
                description: 'Vehicula Cras'
            },
            {
                id: 12,
                title: 'Porta Ornare Euismod',
                start: new Date(year, month, 30),
                allDay: true,
                description: ''
            },
            {
                id: 13,
                title: 'Amet Adipiscing',
                start: new Date(year, month, 30),
                allDay: true,
                description: ''
            }
        ];

        var calendar = new FullCalendar.Calendar(calendarEl, {
            timeZone: 'local',
            plugins: ['dayGrid', 'interaction'],
            editable: true,
            header: false,
            height: 'auto',
            events: events,
            datesRender: function () {
                var currentDate = calendar.getDate();
                calendarEl.setAttribute('data-calendar-month', currentDate.getMonth() + 1);
                calendarTitle.innerText = calendar.view.title
            },
            dateClick: function (info) {
                addEventDate = info.dateStr;
                var modal = $('#event-new');

                modal.modal('show');
                modal.find('.event-new__title').val('').removeClass('is-invalid');
            },
            eventClick: function (info) {
                editEventID = info.event.id;
                var modal = $('#event-edit');

                modal.modal('show');
                modal.find('.event-new__title').val('').removeClass('is-invalid');
                modal.find('.event-edit__title').val(info.event.title);
            }
        });

        calendar.render();

        // Calendar navigation
        $('[data-calendar-view]').on('click', function (e) {
            e.preventDefault();
            var view = $(this).data('calendar-view');

            switch (view) {
                case 'next':
                    calendar.next();
                    break;

                case 'prev':
                    calendar.prev();
                    break;

                case 'today':
                    calendar.today();
                    break;
            }
        });


        // Add new event
        $('.event-new__add').on('click', function () {
            var titleField = $('.event-new__title');
            var title = $('.event-new__title').val();
            var date = addEventDate;

            if(title.length == 0) {
                titleField.addClass('is-invalid');
            }
            else {
                calendar.addEvent({
                    title: title,
                    start: date,
                    allDay: true
                });
                $('#event-new').modal('hide');
            }
        });


        // Edit event
        $('.event-edit__update').on('click', function () {
            var titleField = $('.event-edit__title');
            var title = $('.event-edit__title').val();

            if(title.length == 0) {
                titleField.addClass('is-invalid');
            }
            else {
                var event = calendar.getEventById(editEventID);
                event.setProp('title', title);
                $('#event-edit').modal('hide');
            }
        });


        // Delete event
        $('.event-edit__delete').on('click', function () {
            var event = calendar.getEventById(editEventID);
            event.remove();
            $('#event-edit').modal('hide');
        });
    }
});