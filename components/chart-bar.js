import React from 'react';

/**
 * 从CDN加载的远程柱状图组件
 */
const BarChart = (props) => {
  const { 
    title = '数据统计',
    data = [30, 50, 70, 40, 60],
    labels = ['一月', '二月', '三月', '四月', '五月'],
    color = '#4285F4',
    height = '300px'
  } = props;
  
  // 计算最大值，用于图表比例
  const maxValue = Math.max(...data);
  
  return (
    <div style={{ 
      width: '100%',
      height,
      padding: '20px',
      boxSizing: 'border-box',
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      backgroundColor: 'white',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h3 style={{ 
        margin: '0 0 20px 0',
        fontSize: '18px',
        color: '#333',
        fontWeight: '600',
        textAlign: 'center'
      }}>
        {title}
      </h3>
      
      <div style={{ 
        display: 'flex',
        height: 'calc(100% - 60px)',
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        padding: '0 10px'
      }}>
        {data.map((value, index) => (
          <div key={index} style={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flex: 1
          }}>
            <div style={{ 
              width: '80%',
              backgroundColor: color,
              height: `${(value / maxValue) * 100}%`,
              borderRadius: '4px 4px 0 0',
              transition: 'height 0.5s ease'
            }} />
            <div style={{ 
              marginTop: '8px',
              fontSize: '12px',
              color: '#666',
              textAlign: 'center'
            }}>
              {labels[index] || `项${index+1}`}
            </div>
            <div style={{ 
              fontSize: '12px',
              fontWeight: 'bold',
              color: '#333'
            }}>
              {value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// 必须使用默认导出
export default BarChart; 