import React from 'react';

/**
 * 从CDN加载的远程按钮组件
 */
const RemoteButton = (props) => {
  const { 
    text = '按钮',
    color = '#4285F4',
    onClick = () => console.log('按钮被点击')
  } = props;
  
  return (
    <button 
      style={{ 
        backgroundColor: color, 
        color: 'white',
        padding: '12px 20px',
        borderRadius: '6px',
        border: 'none',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold',
        boxShadow: '0 3px 6px rgba(0,0,0,0.15)',
        transition: 'all 0.2s ease'
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

// 必须使用默认导出
export default RemoteButton; 