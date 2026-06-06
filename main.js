    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    if (taskForm && taskInput) {
        taskForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const taskName = taskInput.value.trim();
            if (taskName.length > 100) {
                alert('Hay nhap lai nhiem vu!');
                return;
            }
            if (taskName === "") {
                alert('Hay nhap nhiem vu!');
                return;
            }
        });
    }