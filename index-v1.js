"use strict";

const form = document.querySelector(".form");

const submitBtn = document.querySelector(".btn");
const dayInput = document.querySelector("#day-field");
const monthInput = document.querySelector("#month-field");
const yearInput = document.querySelector("#year-field");

const dayOut = document.querySelector(".days");
const monthOut = document.querySelector(".months");
const yearOut = document.querySelector(".years");

const dayOutText = document.querySelector(".day-out-text");
const monthOutText = document.querySelector(".month-out-text");
const yearOutText = document.querySelector(".year-out-text");

function resetValues() {
  dayInput.value = "";
  monthInput.value = "";
  yearInput.value = "";
}

function calculateAge(dayValue, monthValue, yearValue) {
  const birthday = new Date(yearValue, monthValue - 1, dayValue);
  console.log(birthday);

  const today = new Date();
  console.log(today);

  const birthdayTimeStamp = birthday.getTime();
  const todayTimestamp = today.getTime();

  let calc = new Date(todayTimestamp - birthdayTimeStamp);

  const calcFormatTmp =
    calc.getDate() +
    " " +
    (Number(calc.getMonth()) + 1) +
    " " +
    calc.getFullYear();
  const calcFormat = calcFormatTmp.split(" ");

  const days_passed = Number(Math.abs(calcFormat[0] - 1));
  const months_passed = Number(Math.abs(calcFormat[1] - 1));
  const years_passed = Number(Math.abs(calcFormat[2] - 1970));
  console.log(calcFormat);
  console.log(days_passed, months_passed, years_passed);

  return {
    days: days_passed,
    months: months_passed,
    years: years_passed,
  };
}

// Logic for Erros

form.addEventListener("change", function (e) {
  console.log(e.target.value);
  console.log(e.target.parentElement);
  console.log(document.querySelector(`${e.target.partentElement}::after`));
  // console.log(e.target.parentElement::after);
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(e);

  const dayValue = dayInput.value;
  const monthValue = monthInput.value;
  const yearValue = yearInput.value;
  const ans = calculateAge(dayValue, monthValue, yearValue);

  dayOut.textContent = ans.days;
  monthOut.textContent = ans.months;
  yearOut.textContent = ans.years;

  ans.days === 1
    ? (dayOutText.textContent = " day")
    : (dayOutText.textContent = " days");
  ans.months === 1
    ? (monthOutText.textContent = " month")
    : (monthOutText.textContent = " months");
  ans.years === 1
    ? (yearOutText.textContent = " year")
    : (yearOutText.textContent = " years");

  resetValues();
});
