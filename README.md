## 未來大學實驗室 API

1. 門禁管理

- [用戶註冊](#用戶註冊)
- [用戶檢查](#用戶檢查)

2. 物料管理

- null

### 用戶註冊

```plain
[API]：/user/register
[方法]：POST
[參數]：
    {
        "uid": "RFID 內容"
    }
[成功回應]：
    {
        "success": true,
        "message": "註冊成功",
        "uid": "RFID 內容",
    }
[失敗回應]：
    {
        "success": false,
        "message": "操作失敗，請重新在試一次",
    }
```

### 用戶檢查

```plain
[API]：/user/check
[方法]：POST
[參數]：
    {
        "uid":"RFID 內容"
    }
[成功回應 - 進入實驗室]：
    {
    "success": true,
    "messgae": "通過驗證，以紀錄進入時間",
    "time": 1586956684067
    }
[成功回應 - 離開實驗室]：
    {
    "success": true,
    "messgae": "通過驗證，以紀錄離開時間",
    "time": 1586956720750
    }
[失敗回應 - 不存在資料庫 | 權限遭移除]：
    {
    "success": false,
    "message": "此用戶沒有權限進入，請連絡相關管理員"
    }

```
