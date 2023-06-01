import classNames from "classnames";
import React, {useState} from "react";

const ToggleTab = () => {
  
  const [activeTab, setActiveTab] = useState(0);

  const handelTabClick = (index: number) => {
    setActiveTab(index);
  }

  return(
    <div className="max-w-[768px] mx-auto py-[50px]">
      {/* <div className="gap-2 flex mb-2">
        <button className={ activeTab === 0 ? 'w-1/3 rounded-md py-5 bg-green-900 text-white text-[18px] uppercase font-bold' : 'w-1/3 bg-green-50 text-opacity-40 font-bold text-[#222] rounded-md py-5 uppercase'} onClick={() => handelTabClick(0)}>
          <p>tab1</p>
        </button>
        <button className={ activeTab === 1 ? 'w-1/3 rounded-md py-5 bg-green-900 text-white text-[18px] uppercase font-bold' : 'w-1/3 bg-green-50 text-opacity-40 font-bold text-[#222] rounded-md py-5 uppercase'} onClick={() => handelTabClick(1)}>
          <p>tab2</p>
        </button>
        <button className={ activeTab === 2 ? 'w-1/3 rounded-md py-5 bg-green-900 text-white text-[18px] uppercase font-bold' : 'w-1/3 bg-green-50 text-opacity-40 font-bold text-[#222] rounded-md py-5 uppercase'} onClick={() => handelTabClick(2)}>
          <p>tab3</p>
        </button>
      </div> */}

      {/* classnames 보편적으로 많이 사용함 */}
      <div className="gap-2 flex mb-2">
        <button className={ classNames('w-full text-opacity-40 bg-green-50 rounded-md py-5 text-[#222] text-[18px] uppercase font-bold',{
          ' text-opacity-100  font-bold   bg-green-900 text-white':activeTab === 0
        })} onClick={() => handelTabClick(0)}>
          <p>tab1</p>
        </button>
        <button className={ classNames('w-full text-opacity-40 bg-green-50 rounded-md py-5 text-[#222] text-[18px] uppercase font-bold',{
          ' text-opacity-100  font-bold   bg-green-900 text-white':activeTab === 1
        })} onClick={() => handelTabClick(1)}>
          <p>tab2</p>
        </button><button className={ classNames('w-full text-opacity-40 bg-green-50 rounded-md py-5 text-[#222] text-[18px] uppercase font-bold',{
          ' text-opacity-100  font-bold   bg-green-900 text-white':activeTab === 2
        })} onClick={() => handelTabClick(2)}>
          <p>tab1</p>
        </button>
      </div>

      {/* TabContent */}
      <div>
        {activeTab === 0 && <div className="w-full bg-green-50 min-h-[400px] rounded-md box-border px-4 py-4 text-center capitalize"> <img src="/images/img02.jpeg" alt="힐링" className="w-full h-full object-cover block rounded-lg overflow-hidden" /></div>}
        {activeTab === 1 && <div className="w-full bg-green-50 min-h-[400px] rounded-md box-border px-4 py-4 text-center capitalize"> <img src="/images/img03.jpeg" alt="힐링" className="w-full h-full object-cover block rounded-lg overflow-hidden" /></div>}
        {activeTab === 2 && <div className="w-full bg-green-50 min-h-[400px] rounded-md box-border px-4 py-4 text-center capitalize"> <img src="/images/img01.jpeg" alt="힐링" className="w-full h-full object-cover block rounded-lg overflow-hidden" /></div>}
      </div>
    </div>
  );
}

export default ToggleTab;