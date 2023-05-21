import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    //lần 2 truyền 'h' vào nhưng useState vẫn chưa nhận value nó sẽ bt
    // đc useEffect thay đổi nó set timeout nếu chưa tới 500 giây thì nó vẫn trả về chuỗi rỗng
    // nếu đủ 500 giây sau 1 khoảng thời gian ròi mới set value lại cho
    //tk debouncedVaule sau đó mưới trả về return
    const [debouncedVaule, setDebouncedVaule] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebouncedVaule(value), delay);

        return () => clearTimeout(handler);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return debouncedVaule;
}

export default useDebounce;
