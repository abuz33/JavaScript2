'use strict';

function clock() {
            const date = new Date();

            const days = document.querySelector('#day');
            const months = document.querySelector('#month');
            const years = document.querySelector('#year');
            const hours = document.querySelector('#hour');
            const minutes = document.querySelector('#minute');
            const seconds = document.querySelector('#second');


            let day = date.getDate();
            let month = date.getUTCMonth() + 1;
            let year = date.getFullYear();
            let hour = new Date().getHours();
            let minute = new Date().getMinutes();
            let second = new Date().getSeconds();

            days.innerHTML = day;
            months.innerHTML = month;
            years.innerHTML = year;
            hours.innerHTML = hour;
            minutes.innerHTML = minute;
            seconds.innerHTML = second;
        }

      setInterval(clock, 1000);