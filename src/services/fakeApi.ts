// fakeApi.ts
const fakeData = [
    { id: '1', name: 'Burger', price: 5 },
    { id: '2', name: 'Fries', price: 2 },
    // ... 다른 메뉴 아이템
];

export const fetchMenu = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(fakeData);
        }, 1000); // 1초 딜레이로 메뉴 아이템을 반환
    });
};
