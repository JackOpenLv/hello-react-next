import '@/app/ui/study/lvm-test-root.css';

export default function Page() {
    return (
      <>
        <div className="block bg-blue-100" >
            <h1>测试block</h1>
        </div>
        <div className="block bg-grey-100">
            <ul className="flex bg-blue-300 p-1 space-x-[10px]">
                <li className="set-margin-for-item border border-w-[10px]">item1</li>
                <li>item2</li>
                <li>item3</li>
            </ul>
        </div>
      </>
    );
}