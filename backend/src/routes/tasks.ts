cat > backend/src/routes/tasks.ts << 'EOF'
import { Router } from 'express';

const router = Router();

// 获取所有任务
router.get('/', (req, res) => {
  res.json([
    { id: 1, title: '测试任务', status: 'TODO' }
  ]);
});

// 创建新任务
router.post('/', (req, res) => {
  const { title } = req.body;
  res.status(201).json({ id: Date.now(), title, status: 'TODO' });
});

export default router;
EOF
