// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Lucas Osmond
// Created on: March 2023
// This file contains the JS functions for index.html

function calculate() {
  //Input
  const hours = parseFloat(document.getElementById('hours-worked-per-week').value)
  const rate = parseFloat(document.getElementById('dollars-earned-per-hour').value)
  
  //Process
  const TAX_RATE = 0.18
  const takeHomeSalary = (hours * rate) * (1.00 - TAX_RATE)
  const taxFraud = (hours * rate) *  TAX_RATE

  //Output
  document.getElementById('i-get').innerHTML = `Your pay will be: $${takeHomeSalary.toFixed(2)}`
  document.getElementById('government-gets').innerHTML = `Your pay will be: $${taxFraud.toFixed(2)}`
}
