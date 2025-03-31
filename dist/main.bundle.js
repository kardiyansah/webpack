/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/alert.service.js":
/*!**********************************!*\
  !*** ./src/app/alert.service.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertService: () => (/* binding */ AlertService)
/* harmony export */ });
/* harmony import */ var _utils_cekInputValid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/cekInputValid.js */ "./src/app/utils/cekInputValid.js");


class AlertService {
  constructor() {
    this.error = document.querySelector("#error");
  }

  tampilkanErrorPenjumlahan = (input, angka) => {
    const hasil = input.reduce((pesan, nilai, index) => {
      if ((0,_utils_cekInputValid_js__WEBPACK_IMPORTED_MODULE_0__.cekInputValid)(angka[index])) {
        return pesan + "";
      } else {
        return pesan + `${nilai} itu bukan angka! `;
      }
    }, "Silahkan masukkan angka yang benar: ");

    this.error.classList.remove("d-none");
    this.error.innerText = hasil;
  };

  sembunyikanError = () => this.error.classList.add("d-none");
}


/***/ }),

/***/ "./src/app/app.js":
/*!************************!*\
  !*** ./src/app/app.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   run: () => (/* binding */ run)
/* harmony export */ });
/* harmony import */ var _utils_parseInput_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/parseInput.js */ "./src/app/utils/parseInput.js");
/* harmony import */ var _utils_cekInputValid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/cekInputValid.js */ "./src/app/utils/cekInputValid.js");



const run = (alertService, calculatorService, jokesService) => {
  alertService.sembunyikanError();

  calculatorService.onClick(() => {
    alertService.sembunyikanError();
    const input = calculatorService.getInput();
    const angka = (0,_utils_parseInput_js__WEBPACK_IMPORTED_MODULE_0__.parseInput)(...input);
    if ((0,_utils_cekInputValid_js__WEBPACK_IMPORTED_MODULE_1__.cekInputValid)(...angka)) {
      const [angka1, angka2] = angka;
      calculatorService.setResult(angka1, angka2);
    } else {
      calculatorService.setResult("");
      alertService.tampilkanErrorPenjumlahan(input, angka);
    }
  });

  jokesService.onClick(() => {
    fetch("https://candaan-api.vercel.app/api/text/random")
      .then((response) => response.json())
      .then((data) => {
        jokesService.setModal(data.data);
      });
  });
};


/***/ }),

/***/ "./src/app/calculator.service.js":
/*!***************************************!*\
  !*** ./src/app/calculator.service.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalculatorService: () => (/* binding */ CalculatorService)
/* harmony export */ });
class CalculatorService {
  constructor() {
    this.operand1 = document.querySelector("#operand1");
    this.operand2 = document.querySelector("#operand2");
    this.tombolTambah = document.querySelector("#tombol-tambah");
    this.hasil = document.querySelector("#hasil");
  }

  getInput() {
    return [this.operand1.value, this.operand2.value];
  }

  setResult(angka1, angka2) {
    this.hasil.innerText = angka1 + angka2;
  }

  onClick(cb) {
    this.tombolTambah.addEventListener("click", cb);
  }
}


/***/ }),

/***/ "./src/app/jokes.service.js":
/*!**********************************!*\
  !*** ./src/app/jokes.service.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JokesService: () => (/* binding */ JokesService)
/* harmony export */ });
class JokesService {
  constructor() {
    this.tombolJokes = document.querySelector("#jokes-receh");
    this.modalBody = document.querySelector(".modal-body");
  }

  setModal(str) {
    this.modalBody.innerHTML = str;
  }

  onClick(cb) {
    this.tombolJokes.addEventListener("click", cb);
  }
}


/***/ }),

/***/ "./src/app/utils/cekInputValid.js":
/*!****************************************!*\
  !*** ./src/app/utils/cekInputValid.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cekInputValid: () => (/* binding */ cekInputValid)
/* harmony export */ });
const cekInputValid = (...angka) => {
  return angka.every((num) => typeof num === "number" && !isNaN(num));
};


/***/ }),

/***/ "./src/app/utils/parseInput.js":
/*!*************************************!*\
  !*** ./src/app/utils/parseInput.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseInput: () => (/* binding */ parseInput)
/* harmony export */ });
const parseInput = (...input) => {
  return input.map((str) => parseInt(str));
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_alert_service_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/alert.service.js */ "./src/app/alert.service.js");
/* harmony import */ var _app_calculator_service_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/calculator.service.js */ "./src/app/calculator.service.js");
/* harmony import */ var _app_jokes_service_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/jokes.service.js */ "./src/app/jokes.service.js");
/* harmony import */ var _app_app_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.js */ "./src/app/app.js");






const alertService = new _app_alert_service_js__WEBPACK_IMPORTED_MODULE_0__.AlertService();
const calculatorService = new _app_calculator_service_js__WEBPACK_IMPORTED_MODULE_1__.CalculatorService();
const jokesService = new _app_jokes_service_js__WEBPACK_IMPORTED_MODULE_2__.JokesService();

(0,_app_app_js__WEBPACK_IMPORTED_MODULE_3__.run)(alertService, calculatorService, jokesService);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXlEO0FBQ3pEO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLHNFQUFhO0FBQ3ZCO0FBQ0EsUUFBUTtBQUNSLDBCQUEwQixPQUFPO0FBQ2pDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCbUQ7QUFDTTtBQUN6RDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixnRUFBVTtBQUM1QixRQUFRLHNFQUFhO0FBQ3JCO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7OztBQzFCTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNuQk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDYk87QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNGTztBQUNQO0FBQ0E7Ozs7Ozs7VUNGQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTnNEO0FBQ1U7QUFDVjtBQUN0RDtBQUNtQztBQUNuQztBQUNBLHlCQUF5QiwrREFBWTtBQUNyQyw4QkFBOEIseUVBQWlCO0FBQy9DLHlCQUF5QiwrREFBWTtBQUNyQztBQUNBLGdEQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9hcHAvYWxlcnQuc2VydmljZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL2FwcC9hcHAuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9hcHAvY2FsY3VsYXRvci5zZXJ2aWNlLmpzIiwid2VicGFjazovL3dlYnBhY2svLi9zcmMvYXBwL2pva2VzLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9hcHAvdXRpbHMvY2VrSW5wdXRWYWxpZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL2FwcC91dGlscy9wYXJzZUlucHV0LmpzIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNla0lucHV0VmFsaWQgfSBmcm9tIFwiLi91dGlscy9jZWtJbnB1dFZhbGlkLmpzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQWxlcnRTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuZXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Vycm9yXCIpO1xyXG4gIH1cclxuXHJcbiAgdGFtcGlsa2FuRXJyb3JQZW5qdW1sYWhhbiA9IChpbnB1dCwgYW5na2EpID0+IHtcclxuICAgIGNvbnN0IGhhc2lsID0gaW5wdXQucmVkdWNlKChwZXNhbiwgbmlsYWksIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChjZWtJbnB1dFZhbGlkKGFuZ2thW2luZGV4XSkpIHtcclxuICAgICAgICByZXR1cm4gcGVzYW4gKyBcIlwiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBwZXNhbiArIGAke25pbGFpfSBpdHUgYnVrYW4gYW5na2EhIGA7XHJcbiAgICAgIH1cclxuICAgIH0sIFwiU2lsYWhrYW4gbWFzdWtrYW4gYW5na2EgeWFuZyBiZW5hcjogXCIpO1xyXG5cclxuICAgIHRoaXMuZXJyb3IuY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKTtcclxuICAgIHRoaXMuZXJyb3IuaW5uZXJUZXh0ID0gaGFzaWw7XHJcbiAgfTtcclxuXHJcbiAgc2VtYnVueWlrYW5FcnJvciA9ICgpID0+IHRoaXMuZXJyb3IuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKTtcclxufVxyXG4iLCJpbXBvcnQgeyBwYXJzZUlucHV0IH0gZnJvbSBcIi4vdXRpbHMvcGFyc2VJbnB1dC5qc1wiO1xyXG5pbXBvcnQgeyBjZWtJbnB1dFZhbGlkIH0gZnJvbSBcIi4vdXRpbHMvY2VrSW5wdXRWYWxpZC5qc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJ1biA9IChhbGVydFNlcnZpY2UsIGNhbGN1bGF0b3JTZXJ2aWNlLCBqb2tlc1NlcnZpY2UpID0+IHtcclxuICBhbGVydFNlcnZpY2Uuc2VtYnVueWlrYW5FcnJvcigpO1xyXG5cclxuICBjYWxjdWxhdG9yU2VydmljZS5vbkNsaWNrKCgpID0+IHtcclxuICAgIGFsZXJ0U2VydmljZS5zZW1idW55aWthbkVycm9yKCk7XHJcbiAgICBjb25zdCBpbnB1dCA9IGNhbGN1bGF0b3JTZXJ2aWNlLmdldElucHV0KCk7XHJcbiAgICBjb25zdCBhbmdrYSA9IHBhcnNlSW5wdXQoLi4uaW5wdXQpO1xyXG4gICAgaWYgKGNla0lucHV0VmFsaWQoLi4uYW5na2EpKSB7XHJcbiAgICAgIGNvbnN0IFthbmdrYTEsIGFuZ2thMl0gPSBhbmdrYTtcclxuICAgICAgY2FsY3VsYXRvclNlcnZpY2Uuc2V0UmVzdWx0KGFuZ2thMSwgYW5na2EyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNhbGN1bGF0b3JTZXJ2aWNlLnNldFJlc3VsdChcIlwiKTtcclxuICAgICAgYWxlcnRTZXJ2aWNlLnRhbXBpbGthbkVycm9yUGVuanVtbGFoYW4oaW5wdXQsIGFuZ2thKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgam9rZXNTZXJ2aWNlLm9uQ2xpY2soKCkgPT4ge1xyXG4gICAgZmV0Y2goXCJodHRwczovL2NhbmRhYW4tYXBpLnZlcmNlbC5hcHAvYXBpL3RleHQvcmFuZG9tXCIpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIGpva2VzU2VydmljZS5zZXRNb2RhbChkYXRhLmRhdGEpO1xyXG4gICAgICB9KTtcclxuICB9KTtcclxufTtcclxuIiwiZXhwb3J0IGNsYXNzIENhbGN1bGF0b3JTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMub3BlcmFuZDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29wZXJhbmQxXCIpO1xyXG4gICAgdGhpcy5vcGVyYW5kMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3BlcmFuZDJcIik7XHJcbiAgICB0aGlzLnRvbWJvbFRhbWJhaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9tYm9sLXRhbWJhaFwiKTtcclxuICAgIHRoaXMuaGFzaWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hhc2lsXCIpO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW5wdXQoKSB7XHJcbiAgICByZXR1cm4gW3RoaXMub3BlcmFuZDEudmFsdWUsIHRoaXMub3BlcmFuZDIudmFsdWVdO1xyXG4gIH1cclxuXHJcbiAgc2V0UmVzdWx0KGFuZ2thMSwgYW5na2EyKSB7XHJcbiAgICB0aGlzLmhhc2lsLmlubmVyVGV4dCA9IGFuZ2thMSArIGFuZ2thMjtcclxuICB9XHJcblxyXG4gIG9uQ2xpY2soY2IpIHtcclxuICAgIHRoaXMudG9tYm9sVGFtYmFoLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYik7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBKb2tlc1NlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy50b21ib2xKb2tlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjam9rZXMtcmVjZWhcIik7XHJcbiAgICB0aGlzLm1vZGFsQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtYm9keVwiKTtcclxuICB9XHJcblxyXG4gIHNldE1vZGFsKHN0cikge1xyXG4gICAgdGhpcy5tb2RhbEJvZHkuaW5uZXJIVE1MID0gc3RyO1xyXG4gIH1cclxuXHJcbiAgb25DbGljayhjYikge1xyXG4gICAgdGhpcy50b21ib2xKb2tlcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2IpO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY29uc3QgY2VrSW5wdXRWYWxpZCA9ICguLi5hbmdrYSkgPT4ge1xyXG4gIHJldHVybiBhbmdrYS5ldmVyeSgobnVtKSA9PiB0eXBlb2YgbnVtID09PSBcIm51bWJlclwiICYmICFpc05hTihudW0pKTtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IHBhcnNlSW5wdXQgPSAoLi4uaW5wdXQpID0+IHtcclxuICByZXR1cm4gaW5wdXQubWFwKChzdHIpID0+IHBhcnNlSW50KHN0cikpO1xyXG59O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IEFsZXJ0U2VydmljZSB9IGZyb20gXCIuL2FwcC9hbGVydC5zZXJ2aWNlLmpzXCI7XHJcbmltcG9ydCB7IENhbGN1bGF0b3JTZXJ2aWNlIH0gZnJvbSBcIi4vYXBwL2NhbGN1bGF0b3Iuc2VydmljZS5qc1wiO1xyXG5pbXBvcnQgeyBKb2tlc1NlcnZpY2UgfSBmcm9tIFwiLi9hcHAvam9rZXMuc2VydmljZS5qc1wiO1xyXG5cclxuaW1wb3J0IHsgcnVuIH0gZnJvbSBcIi4vYXBwL2FwcC5qc1wiO1xyXG5cclxuY29uc3QgYWxlcnRTZXJ2aWNlID0gbmV3IEFsZXJ0U2VydmljZSgpO1xyXG5jb25zdCBjYWxjdWxhdG9yU2VydmljZSA9IG5ldyBDYWxjdWxhdG9yU2VydmljZSgpO1xyXG5jb25zdCBqb2tlc1NlcnZpY2UgPSBuZXcgSm9rZXNTZXJ2aWNlKCk7XHJcblxyXG5ydW4oYWxlcnRTZXJ2aWNlLCBjYWxjdWxhdG9yU2VydmljZSwgam9rZXNTZXJ2aWNlKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9