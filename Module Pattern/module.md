### Module Design Pattern
>JavaScript module là một design pattern phỏ biên for keeping particular pieces code đọc lập giữa các component
>Nó cung cấp liên kết lỏng lẻo để hỗ trợ cấu trúc code tốt

1. Modules nên là một IIFE cho phép tạo ra  private scope, sử dụng closure để bảo vệ private var
```javascript
(function() {

    // declare private variables and/or functions

    return {
      // declare public variables and/or functions
    }

})();
```
Concret implementation
```javascript
const Bike = (function() {
  let branch = "DOC_LAP";
  let getBranch = function() {
    return branch;
  }
  let setBranch = function(newBranch) {
    branch = newBranch;
  }
  return {
  	getBranch: getBranch,
  	setBranch: setBranch
  }
})();

Bike.getBranch();
Bike.setBranch("THONG_NHAT");
```