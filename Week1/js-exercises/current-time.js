'use strict';

function clock() {
            const date = new Date();

            const days = document.querySelector('#day');
            const months = document.querySelector('#month');
            const years = document.querySelector('#year');
            const hours = document.querySelector('#hour');
            const minutes = document.querySelector('#minute');
            const seconds = document.querySelector('#second');


            const day = date.getDate();
            const month = date.getUTCMonth() + 1;
            const year = date.getFullYear();
            const hour = new Date().getHours();
            const minute = new Date().getMinutes();
            const second = new Date().getSeconds();

            days.innerHTML = day;
            months.innerHTML = month;
            years.innerHTML = year;
            hours.innerHTML = hour;
            minutes.innerHTML = minute;
            seconds.innerHTML = second;
        }

      setInterval(clock, 1000);