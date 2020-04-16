## Future Lab API

> path：https://future-lab-api-v1.herokuapp.com

1. 門禁管理

- [用戶註冊](#用戶註冊)
- [用戶檢查](#用戶檢查)
- [請求範例](#請求範例)

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
[失敗回應 - 重複註冊]：
    {
        "success": false,
        "message": "重複註冊，操作失敗",
    }
[失敗回應 - 異常處理]：
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

### 請求範例

Python：

```py
import requests
import json

# path
rq_url = "https://future-lab-api-v1.herokuapp.com" + '/user/check'

# header ( JSON 型式)
rq_headers = {"Content-Type":"application/json"}

# header ( Form 型式)
# rq_headers = {"Content-Type":"application/x-www-form-urlencoded"}

# data ( JSON 型式)
rq_payload = {"uid":"u2"}

# data ( Form 型式)
# rq_payload = "uid=u2"

# response ( JSON 型式)
res = requests.post(rq_url, headers=rq_headers, data=json.dumps(rq_payload))

# response ( Form 型式)
# res = requests.post(rq_url, headers=rq_headers,data=rq_payload)

# do something
resData = json.loads(res.text);
print(resData)
```
