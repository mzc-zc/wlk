import React from 'react';

/**
 * 从CDN加载的远程卡片组件
 */
const RemoteCard = (props) => {
  const { 
    title = '卡片标题', 
    content = '这是卡片内容',
    imageUrl = '',
    width = '320px',
    borderRadius = '8px'
  } = props;
  
  return (
    <div style={{ 
      width: width,
      border: '1px solid #e0e0e0', 
      borderRadius: borderRadius,
      overflow: 'hidden',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      backgroundColor: 'white',
      fontFamily: 'Arial, sans-serif'
    }}>
      {imageUrl && (
        <div style={{ width: '100%', height: '180px', overflow: 'hidden' }}>
          <img 
            src={imageUrl} 
            alt={title} 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              transition: 'transform 0.3s ease'
            }}
          />
        </div>
      )}
      <div style={{ padding: '16px 20px' }}>
        <h3 style={{ 
          margin: '0 0 12px 0', 
          fontSize: '18px', 
          color: '#333',
          fontWeight: '600'
        }}>
          {title}
        </h3>
        <p style={{ 
          margin: '0', 
          color: '#666',
          fontSize: '14px',
          lineHeight: '1.5'
        }}>
          {content}
        </p>
      </div>
    </div>
  );
};

// 必须使用默认导出
export default RemoteCard; 