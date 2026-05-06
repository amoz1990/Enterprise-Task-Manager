cat > frontend/src/App.tsx << 'EOF'
import { useEffect, useState } from 'react';

interface Task { id: number; title: string; status: string; }

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    // 模拟数据
    setTasks([
      { id: 1, title: '学习前端开发', status: 'TODO' },
      { id: 2, title: '完成项目部署', status: 'IN_PROGRESS' },
      { id: 3, title: '准备面试', status: 'DONE' }
    ]);
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">任务看板</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tasks.map(task => (
          <div key={task.id} className="p-4 bg-white rounded shadow">
            <h3 className="font-semibold text-lg">{task.title}</h3>
            <span className={`px-2 py-1 text-xs rounded ${task.status === 'DONE' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
              {task.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
EOF
