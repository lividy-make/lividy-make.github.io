const translations = {
  zh: {
    "nav.skills": "技能",
    "nav.projects": "项目",
    "nav.contact": "联系",
    "nav.cta": "联系我",

    "hero.lead":
      "我是李艺，自动化专业学生。关注 PLC 顺序控制、嵌入式采集与电机仿真，把现场联锁、传感器数据和调速模型做成可验证、可落地的工程方案。",
    "hero.title.line1": "构建可靠系统，",
    "hero.title.line2": "也打磨可见体验。",
    "hero.cta.projects": "查看项目",
    "hero.cta.contact": "获取联系方式",

    "stats.projects.label": "项目数量",
    "stats.projects.value": "3 个",
    "stats.skills.label": "技能覆盖",
    "stats.skills.value": "12 项",
    "stats.status.label": "求职状态",
    "stats.status.value": "开放实习/校招",

    "skills.title": "技能矩阵",
    "skills.desc": "按工程方向标注熟练度。点击分类可筛选高亮。",
    "skills.filter.all": "全部",
    "skills.filter.software": "软件工具",
    "skills.filter.code": "编程",
    "skills.filter.plc": "PLC / 硬件",
    "skills.filter.control": "控制 / 仿真",

    "skill.tia.desc": "西门子编程 / 调试",
    "skill.eplan.desc": "电气原理 / 图纸",
    "skill.codesys.desc": "IEC 61131 / 软 PLC",
    "skill.matlab.desc": "建模 / 数据分析",
    "skill.cpp.desc": "嵌入式底层开发",
    "skill.python.desc": "脚本 / 数据处理",
    "skill.stm32.desc": "MCU / 外设驱动",
    "skill.s71200.name": "西门子 S7-1200",
    "skill.s71200.desc": "顺序控制 / 联锁",
    "skill.mitsubishi.name": "三菱 FX 系列",
    "skill.mitsubishi.desc": "梯形图 / 现场调试",
    "skill.modbus.desc": "RTU / TCP 通信",
    "skill.pid.name": "PID 控制",
    "skill.pid.desc": "调参 / 闭环设计",
    "skill.factoryio.desc": "虚拟产线 / 联调",

    "projects.title": "精选项目",
    "projects.desc":
      "四件代表作品：覆盖 PLC 联锁、嵌入式采集、电机仿真与毫米波雷达信号处理。",

    "project.plc.title": "多工位顺序控制",
    "project.plc.desc":
      "基于 S7-1200 的状态机设计，覆盖多工位节拍、互锁条件与异常停机路径，带联锁保护。",
    "project.plc.tag2": "状态机",
    "project.plc.tag3": "联锁保护",
    "project.plc.link": "了解协作细节 →",

    "project.stm32.title": "STM32 传感器数据采集",
    "project.stm32.desc":
      "嵌入式硬件方向：完成传感器驱动、采样时序与数据缓冲，面向现场实时采集与调试。",
    "project.stm32.tag2": "传感器驱动",
    "project.stm32.tag3": "实时采样",
    "project.stm32.link": "了解协作细节 →",

    "project.motor.title": "电机调速 Simulink 仿真",
    "project.motor.desc":
      "电气方向：搭建电机调速仿真模型，验证 PID 参数与动态响应，为现场调试提供依据。",
    "project.motor.tag2": "调速模型",
    "project.motor.tag3": "PID 验证",
    "project.motor.link": "了解协作细节 →",

    "project.radar.title": "FMCW 毫米波雷达信号处理",
    "project.radar.desc":
      "基于 MATLAB 构建 77GHz FMCW 雷达算法链路，完成 1D 测距、2D 测速与 2D CA-CFAR 目标检测。",
    "project.radar.tag2": "FMCW",
    "project.radar.tag3": "CFAR",
    "project.radar.link": "了解协作细节 →",

    "contact.title": "联系方式",
    "contact.desc": "项目咨询、技术评审或工程协作，都可以直接写信。",
    "contact.timezone": "时区 · GMT+8 · 中国 · 可远程",
    "contact.reply": "通常 24 小时内回复。",
    "form.name": "姓名",
    "form.email": "邮箱",
    "form.message": "想聊什么",
    "form.name.placeholder": "怎么称呼你",
    "form.message.placeholder": "项目背景、时间窗口、期望产出……",
    "form.submit": "发送消息",
    "form.sending": "发送中……",
    "form.error.replyto": "请填写邮箱地址",
    "form.error.incomplete": "请完整填写姓名、有效邮箱和消息。",
    "form.success": "消息已发送，我会尽快回复。",
    "form.error.fail": "发送失败，请稍后重试或直接发邮件联系我。",
    "form.error.network": "网络异常，发送失败，请稍后重试。",

    "footer.copy": "© 2026 李艺 · Built with HTML / CSS / JS",
    "footer.top": "回到顶部",

    "crumb.home": "首页",
    "nav.home": "返回首页",
    "project.cta.home": "← 返回首页",
    "project.cta.others": "查看其他项目",

    "project.plc.lead":
      "设计三工位步进序列控制逻辑，覆盖多工位节拍、互锁条件与异常停机路径，带联锁保护，确保现场设备安全运行。",
    "project.plc.overview.title": "项目概述",
    "project.plc.overview.body1":
      "本系统针对自动化装配线中的多工位协同作业需求，基于西门子 S7-1200 PLC 设计状态机控制逻辑。系统包含上料、加工、下料三个工位，每个工位有独立的传感器检测和执行机构。",
    "project.plc.overview.body2":
      "核心目标是实现工位间的精确节拍控制、防止误动作，并在异常时快速停机并报警。",
    "project.plc.role.title": "我的角色",
    "project.plc.role.item1": "独立完成 PLC 程序编写与调试（SCL 语言）",
    "project.plc.role.item2": "负责 I/O 分配、联锁逻辑设计、异常处理路径编写",
    "project.plc.role.item3": "使用 Factory IO 搭建仿真环境进行逻辑验证",
    "project.plc.role.item4": "编写调试记录与操作说明",
    "project.plc.tech.title": "技术细节",
    "project.plc.tech.desc": "PLC 型号、编程语言、通信协议、开发与仿真工具。",
    "project.plc.tech.plc.label": "PLC / 控制器",
    "project.plc.tech.plc.value": "西门子 S7-1200（CPU 1214C）",
    "project.plc.tech.lang.label": "编程语言",
    "project.plc.tech.lang.value": "SCL / LAD",
    "project.plc.tech.comm.label": "通信协议",
    "project.plc.tech.comm.value": "Modbus RTU（与 HMI 通信）",
    "project.plc.tech.tool.label": "开发工具",
    "project.plc.tech.tool.value": "TIA Portal V17",
    "project.plc.tech.sim.label": "仿真 / 联调",
    "project.plc.tech.sim.value": "Factory IO",
    "project.plc.tech.hw.label": "其他硬件",
    "project.plc.tech.hw.value": "光电传感器、气缸、变频器、HMI",
    "project.plc.challenges.title": "技术难点",
    "project.plc.challenge1.title": "难点一 · 多工位联锁逻辑复杂",
    "project.plc.challenge1.body":
      "需要确保任一工位未就绪时，其他工位不能启动。解决方案是采用状态机 + 互锁条件表，将每个工位的「就绪」「运行」「完成」「故障」状态显式定义，用 SCL 的 CASE 语句实现。",
    "project.plc.challenge2.title": "难点二 · 异常停机路径设计",
    "project.plc.challenge2.body":
      "模拟气缸卡滞、传感器失效等场景，确保系统能安全停机并记录故障工位。通过 Factory IO 注入故障，验证了 5 种异常场景下的响应时间均小于 200ms。",
    "project.plc.results.title": "成果数据",
    "project.plc.results.desc": "节拍、异常响应与联锁覆盖的量化结果。",
    "project.plc.results.metric1.label": "节拍时间",
    "project.plc.results.metric1.value": "8s / 工位",
    "project.plc.results.metric2.label": "异常响应",
    "project.plc.results.metric2.value": "< 200ms",
    "project.plc.results.metric3.label": "联锁覆盖",
    "project.plc.results.metric3.value": "100% 工位",
    "project.plc.results.note": "形成可复用的状态机模板，后续项目直接调用",

    "project.stm32.lead":
      "设计并实现 4 通道模拟/数字混合传感器采集系统，完成信号调理、ADC 采样、数据缓冲与串口上传，面向工业现场实时监测场景。",
    "project.stm32.crumb": "STM32 传感器采集",
    "project.stm32.overview.title": "项目概述",
    "project.stm32.overview.body1":
      "本系统针对工业设备状态监测需求，基于 STM32F103 微控制器设计多通道数据采集方案。系统支持 4 路传感器输入（温度、压力、振动、开关量），完成信号调理、ADC 采样、滑动平均滤波与数据缓冲，并通过 UART/Modbus RTU 上传至 PC 端或 HMI。",
    "project.stm32.overview.body2": "核心目标是实现稳定、低延迟、可复现的数据采集链路。",
    "project.stm32.role.title": "我的角色",
    "project.stm32.role.item1": "独立完成硬件选型、电路原理图设计与 PCB 布局",
    "project.stm32.role.item2": "编写 STM32 底层驱动（ADC、UART、DMA、定时器）",
    "project.stm32.role.item3": "实现滑动平均滤波算法与环形缓冲区数据管理",
    "project.stm32.role.item4": "使用逻辑分析仪与串口助手完成系统联调与验证",
    "project.stm32.tech.title": "技术细节",
    "project.stm32.tech.desc": "MCU 型号、编程语言、通信协议、开发工具与硬件。",
    "project.stm32.tech.mcu.label": "MCU / 控制器",
    "project.stm32.tech.mcu.value": "STM32F103C8T6（ARM Cortex-M3）",
    "project.stm32.tech.lang.label": "编程语言",
    "project.stm32.tech.lang.value": "C / 寄存器 + 标准外设库",
    "project.stm32.tech.comm.label": "通信协议",
    "project.stm32.tech.comm.value": "UART / Modbus RTU",
    "project.stm32.tech.tool.label": "开发工具",
    "project.stm32.tech.tool.value": "Keil MDK、STM32CubeMX",
    "project.stm32.tech.pcb.label": "硬件设计",
    "project.stm32.tech.pcb.value": "Altium Designer",
    "project.stm32.tech.hw.label": "其他硬件",
    "project.stm32.tech.hw.value": "LM358 信号调理、ADS1115 外部 ADC、OLED 显示屏",
    "project.stm32.challenges.title": "技术难点",
    "project.stm32.challenge1.title": "难点一 · 多通道采样时序冲突",
    "project.stm32.challenge1.body":
      "4 路传感器共用 ADC 时会出现采样延迟。解决方案是采用 DMA + 定时器触发，实现 4 通道轮询采样，将采样周期稳定在 1ms，CPU 占用率降至 15% 以下。",
    "project.stm32.challenge2.title": "难点二 · 模拟信号噪声抑制",
    "project.stm32.challenge2.body":
      "工业现场电磁干扰导致采样值抖动。解决方案是硬件上加 RC 低通滤波，软件上实现 16 点滑动平均滤波，将采样波动从 ±5% 降低至 ±0.5%。",
    "project.stm32.results.title": "成果数据",
    "project.stm32.results.desc": "采样周期、波动与 CPU 占用率的量化结果。",
    "project.stm32.results.metric1.label": "采样周期",
    "project.stm32.results.metric1.value": "1ms / 4 通道",
    "project.stm32.results.metric2.label": "采样波动",
    "project.stm32.results.metric2.value": "±0.5%",
    "project.stm32.results.metric3.label": "CPU 占用率",
    "project.stm32.results.metric3.value": "< 15%",
    "project.stm32.results.note":
      "形成可复用的 STM32 采集驱动模板，支持后续项目快速移植",

    "project.motor.lead":
      "搭建直流电机数学模型与 PID 闭环控制仿真平台，验证调速策略的动态响应与稳态精度，为现场调试提供参数依据。",
    "project.motor.crumb": "电机调速仿真",
    "project.motor.overview.title": "项目概述",
    "project.motor.overview.body1":
      "本系统针对直流电机调速需求，基于 MATLAB/Simulink 搭建电机数学模型与 PID 闭环控制仿真平台。系统包含电机本体模型、PWM 驱动、编码器反馈与 PID 控制器，支持空载与负载扰动工况下的调速验证。",
    "project.motor.overview.body2":
      "核心目标是评估不同 PID 参数下的动态响应与稳态精度，为实际调试提供参考。",
    "project.motor.role.title": "我的角色",
    "project.motor.role.item1": "独立完成电机数学建模与 Simulink 仿真搭建",
    "project.motor.role.item2": "设计 PID 控制器参数并完成整定",
    "project.motor.role.item3": "分析空载/负载扰动下的动态响应曲线",
    "project.motor.role.item4": "编写仿真报告与参数整定建议",
    "project.motor.tech.title": "技术细节",
    "project.motor.tech.desc": "仿真平台、控制算法、电机模型与相关工具模块。",
    "project.motor.tech.platform.label": "仿真平台",
    "project.motor.tech.platform.value": "MATLAB / Simulink R2024b",
    "project.motor.tech.algo.label": "控制算法",
    "project.motor.tech.algo.value": "PID / 抗积分饱和",
    "project.motor.tech.model.label": "电机模型",
    "project.motor.tech.model.value": "直流电机二阶传递函数",
    "project.motor.tech.tool.label": "开发工具",
    "project.motor.tech.tool.value": "Simulink、Control System Toolbox",
    "project.motor.tech.drive.label": "驱动与反馈",
    "project.motor.tech.drive.value": "PWM 驱动、编码器反馈",
    "project.motor.tech.other.label": "其他模块",
    "project.motor.tech.other.value": "负载扰动模块",
    "project.motor.challenges.title": "技术难点",
    "project.motor.challenge1.title": "难点一 · 电机参数不确定性",
    "project.motor.challenge1.body":
      "实际电机参数与标称值存在偏差，导致仿真结果偏离现场。解决方案是采用参数扫描（Parameter Sweep）分析不同电阻、电感、转动惯量下的响应，确定鲁棒性较好的 PID 参数区间。",
    "project.motor.challenge2.title": "难点二 · 负载扰动下的稳态误差",
    "project.motor.challenge2.body":
      "突加负载时转速跌落明显。解决方案是引入抗积分饱和与前馈补偿，将负载扰动下的转速恢复时间从 1.2s 缩短至 0.4s，稳态误差控制在 ±1% 以内。",
    "project.motor.results.title": "成果数据",
    "project.motor.results.desc": "稳态误差、扰动恢复与超调量的量化结果。",
    "project.motor.results.metric1.label": "稳态误差",
    "project.motor.results.metric1.value": "±1%",
    "project.motor.results.metric2.label": "扰动恢复",
    "project.motor.results.metric2.value": "0.4s",
    "project.motor.results.metric3.label": "超调量",
    "project.motor.results.metric3.value": "< 5%",
    "project.motor.results.note":
      "形成可复用的 PID 参数整定流程文档，可用于实际电机调试",

    "project.radar.crumb": "毫米波雷达",
    "project.radar.lead":
      "基于 MATLAB 构建 77GHz FMCW 雷达算法链路，完成从一维测距、二维测速到 CFAR 目标检测的全流程物理仿真。",
    "project.radar.overview.title": "项目概述",
    "project.radar.overview.body1":
      "本系统基于调频连续波（FMCW）体制，在 MATLAB 中构建完整的雷达信号处理算法链路。系统参数设定为载频 77GHz、带宽 4GHz、单 Chirp 扫频周期 50us。通过对中频信号进行快时间（1D FFT）提取距离信息，利用慢时间维度的 2D FFT 提取多普勒速度，最后通过 2D CA-CFAR（单元平均恒虚警率）算法在叠加噪声的环境中实现目标的自动检测与聚类。",
    "project.radar.role.title": "我的角色",
    "project.radar.role.item1":
      "独立推导 FMCW 雷达测距、测速数学模型及雷达方程。",
    "project.radar.role.item2":
      "使用 MATLAB 编写波形生成、自由空间传播、目标反射与去斜（Dechirp）全链路仿真代码。",
    "project.radar.role.item3":
      "实现加窗处理（Hann Window）与 2D FFT 频谱分析，构建 Range-Doppler Map。",
    "project.radar.role.item4":
      "手写 2D CA-CFAR 检测器，完成保护单元、参考单元的动态滑动与阈值计算。",
    "project.radar.tech.title": "技术细节",
    "project.radar.tech.desc": "仿真平台、核心算法与雷达体制参数。",
    "project.radar.tech.platform.label": "仿真平台",
    "project.radar.tech.platform.value":
      "MATLAB R2024b (+ Phased Array System Toolbox)",
    "project.radar.tech.algo.label": "核心算法",
    "project.radar.tech.algo.value":
      "1D FFT / 2D FFT / CA-CFAR / 8-连通域聚类",
    "project.radar.tech.sys.label": "雷达体制",
    "project.radar.tech.sys.value": "FMCW (77GHz Center Freq, 4GHz BW)",
    "project.radar.challenges.title": "技术难点",
    "project.radar.challenge1.title": "难点一 · 欠采样与距离模糊",
    "project.radar.challenge1.body":
      "发现题目预设的 10MHz 采样率无法覆盖 30m 目标（最大不模糊距离仅约 18.7m），且会导致频谱混叠。通过理论计算将复基带采样率提升至 4GHz，成功解算出真实距离。",
    "project.radar.challenge2.title": "难点二 · 动态阈值与目标聚类",
    "project.radar.challenge2.body":
      "在复杂噪声背景下手写 2D CA-CFAR，设计 2x2 保护单元与 4x4 参考单元，并结合 Pfa=1e-5 动态计算阈值乘数。针对目标主瓣跨越多个像素的问题，实现了基于八连通域的功率加权重心聚类，每个目标只保留一个位置。",
    "project.radar.results.title": "成果数据与可视化",
    "project.radar.results.desc":
      "一维测距、二维测速与 CFAR 检测的量化结果，以及对应仿真图。",
    "project.radar.results.metric1.label": "一维测距",
    "project.radar.results.metric1.value": "30.017 m（分辨率 3.75 cm）",
    "project.radar.results.metric2.label": "二维测速",
    "project.radar.results.metric2.value": "-15.03 m/s",
    "project.radar.results.metric3.label": "CFAR 检测",
    "project.radar.results.metric3.value": "Pfa=1e-5 下成功提取",
    "project.radar.results.note":
      "形成完整的雷达信号处理链路，并生成 Range-Doppler Map。",
    "project.radar.fig1": "图 1：FMCW 一维距离幅度谱（峰值锁定在 30.017m）",
    "project.radar.fig2": "图 2：距离-多普勒图（峰值速度 -15.03 m/s）",
    "project.radar.fig3": "图 3：基于二维 CA-CFAR 的检测结果与目标聚类",
  },
  en: {
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.cta": "Get in Touch",

    "hero.lead":
      "I'm Li Yi, an Automation Engineering student focused on PLC sequential control, embedded data acquisition, and motor simulation. I turn field interlocks, sensor data, and speed-control models into verifiable, deployable engineering solutions.",
    "hero.title.line1": "Build reliable systems.",
    "hero.title.line2": "Refine the experience.",
    "hero.cta.projects": "View Projects",
    "hero.cta.contact": "Contact Me",

    "stats.projects.label": "Projects",
    "stats.projects.value": "3",
    "stats.skills.label": "Skills",
    "stats.skills.value": "12",
    "stats.status.label": "Status",
    "stats.status.value": "Open to Internship / Entry-Level",

    "skills.title": "Skill Matrix",
    "skills.desc":
      "Proficiency mapped by engineering domain. Click a category to filter.",
    "skills.filter.all": "All",
    "skills.filter.software": "Software",
    "skills.filter.code": "Programming",
    "skills.filter.plc": "PLC / Hardware",
    "skills.filter.control": "Control / Simulation",

    "skill.tia.desc": "Siemens PLC Programming & Commissioning",
    "skill.eplan.desc": "Electrical Schematics & Drawings",
    "skill.codesys.desc": "IEC 61131 / Soft PLC",
    "skill.matlab.desc": "Modeling & Data Analysis",
    "skill.cpp.desc": "Embedded Low-Level Development",
    "skill.python.desc": "Scripting & Data Processing",
    "skill.stm32.desc": "MCU / Peripheral Drivers",
    "skill.s71200.name": "Siemens S7-1200",
    "skill.s71200.desc": "Sequential Control & Interlocks",
    "skill.mitsubishi.name": "Mitsubishi FX Series",
    "skill.mitsubishi.desc": "Ladder Logic & Field Commissioning",
    "skill.modbus.desc": "Modbus RTU / TCP",
    "skill.pid.name": "PID Control",
    "skill.pid.desc": "PID Tuning & Closed-Loop Design",
    "skill.factoryio.desc": "Virtual Commissioning",

    "projects.title": "Selected Work",
    "projects.desc":
      "Four selected works covering PLC interlocks, embedded acquisition, motor simulation, and FMCW radar signal processing.",

    "project.plc.title": "Multi-Station Sequential Control",
    "project.plc.desc":
      "State-machine design on S7-1200 covering multi-station cycle timing, interlock conditions, and fault-stop paths with interlock protection.",
    "project.plc.tag2": "State Machine",
    "project.plc.tag3": "Interlock Protection",
    "project.plc.link": "View Details →",

    "project.stm32.title": "STM32 Sensor Data Acquisition",
    "project.stm32.desc":
      "Embedded hardware track: sensor drivers, sampling timing, and data buffering for real-time field acquisition and debugging.",
    "project.stm32.tag2": "Sensor Drivers",
    "project.stm32.tag3": "Real-Time Sampling",
    "project.stm32.link": "View Details →",

    "project.motor.title": "Motor Speed Control Simulation in Simulink",
    "project.motor.desc":
      "Electrical track: built a motor speed-control simulation model to validate PID parameters and dynamic response for field commissioning.",
    "project.motor.tag2": "Speed Control Model",
    "project.motor.tag3": "PID Validation",
    "project.motor.link": "View Details →",

    "contact.title": "Contact",
    "contact.desc":
      "For project inquiries, technical reviews, or engineering collaboration, feel free to reach out.",
    "contact.timezone": "GMT+8 · China · Remote-Friendly",
    "contact.reply": "Typically responds within 24 hours.",
    "form.name": "Name",
    "form.email": "Email",
    "form.message": "Message",
    "form.name.placeholder": "Your name",
    "form.message.placeholder":
      "Project background, timeline, expected deliverables…",
    "form.submit": "Send Message",
    "form.sending": "Sending…",
    "form.error.replyto": "Please enter your email address.",
    "form.error.incomplete":
      "Please complete name, a valid email, and message.",
    "form.success": "Message sent. I'll get back to you soon.",
    "form.error.fail":
      "Failed to send. Please try again or email me directly.",
    "form.error.network": "Network error. Please try again later.",

    "footer.copy": "© 2026 Li Yi · Built with HTML / CSS / JS",
    "footer.top": "Back to Top",

    "crumb.home": "Home",
    "nav.home": "Back to Home",
    "project.cta.home": "← Back to Home",
    "project.cta.others": "View Other Projects",

    "project.plc.crumb": "Multi-Station Control",
    "project.plc.lead":
      "Designed a three-station sequential control logic covering multi-station cycle timing, interlock conditions, and fault-stop paths with interlock protection to ensure safe field operation.",
    "project.plc.overview.title": "Overview",
    "project.plc.overview.body1":
      "This system addresses the multi-station coordination requirements of an automated assembly line. Based on a Siemens S7-1200 PLC, a state-machine control logic was designed. The system includes three stations — loading, processing, and unloading — each with independent sensor detection and actuators.",
    "project.plc.overview.body2":
      "The core objective is to achieve precise cycle timing between stations, prevent misoperations, and ensure fast shutdown with alarms on faults.",
    "project.plc.role.title": "My Role",
    "project.plc.role.item1":
      "Independently developed and commissioned the PLC program (SCL)",
    "project.plc.role.item2":
      "Responsible for I/O assignment, interlock logic design, and fault-handling paths",
    "project.plc.role.item3":
      "Built a simulation environment in Factory IO for logic verification",
    "project.plc.role.item4":
      "Wrote commissioning records and operating instructions",
    "project.plc.tech.title": "Tech Stack",
    "project.plc.tech.desc":
      "PLC model, programming languages, communication protocols, development and simulation tools.",
    "project.plc.tech.plc.label": "PLC / Controller",
    "project.plc.tech.plc.value": "Siemens S7-1200 (CPU 1214C)",
    "project.plc.tech.lang.label": "Programming",
    "project.plc.tech.lang.value": "SCL / LAD",
    "project.plc.tech.comm.label": "Communication",
    "project.plc.tech.comm.value": "Modbus RTU (to HMI)",
    "project.plc.tech.tool.label": "Development",
    "project.plc.tech.tool.value": "TIA Portal V17",
    "project.plc.tech.sim.label": "Simulation",
    "project.plc.tech.sim.value": "Factory IO",
    "project.plc.tech.hw.label": "Other Hardware",
    "project.plc.tech.hw.value": "Photoelectric sensors, cylinders, VFD, HMI",
    "project.plc.challenges.title": "Challenges",
    "project.plc.challenge1.title":
      "Challenge 1 · Complex Multi-Station Interlocks",
    "project.plc.challenge1.body":
      "Required ensuring that no station can start unless all others are ready. Solved by using a state machine combined with an interlock condition table, explicitly defining each station's Ready / Running / Done / Fault states, implemented with SCL CASE statements.",
    "project.plc.challenge2.title": "Challenge 2 · Fault-Stop Path Design",
    "project.plc.challenge2.body":
      "Simulated scenarios such as cylinder jamming and sensor failure to ensure safe shutdown and fault-station logging. Injected faults via Factory IO and verified that response time stayed under 200ms across 5 fault scenarios.",
    "project.plc.results.title": "Results",
    "project.plc.results.desc":
      "Quantified cycle time, fault response, and interlock coverage.",
    "project.plc.results.metric1.label": "Cycle Time",
    "project.plc.results.metric1.value": "8s / station",
    "project.plc.results.metric2.label": "Fault Response",
    "project.plc.results.metric2.value": "< 200ms",
    "project.plc.results.metric3.label": "Interlock Coverage",
    "project.plc.results.metric3.value": "100% of stations",
    "project.plc.results.note":
      "Produced a reusable state-machine template for future projects",

    "project.stm32.crumb": "STM32 Acquisition",
    "project.stm32.lead":
      "Designed and implemented a 4-channel mixed analog/digital sensor acquisition system covering signal conditioning, ADC sampling, data buffering, and serial upload for real-time industrial monitoring.",
    "project.stm32.overview.title": "Overview",
    "project.stm32.overview.body1":
      "This system addresses condition monitoring needs on industrial equipment. Based on an STM32F103 MCU, a multi-channel data acquisition scheme was designed, supporting 4 sensor inputs (temperature, pressure, vibration, digital), signal conditioning, ADC sampling, moving-average filtering, and data buffering, with upload via UART/Modbus RTU to a PC or HMI.",
    "project.stm32.overview.body2":
      "The core objective is a stable, low-latency, reproducible data acquisition chain.",
    "project.stm32.role.title": "My Role",
    "project.stm32.role.item1":
      "Independently completed hardware selection, schematic design, and PCB layout",
    "project.stm32.role.item2":
      "Wrote STM32 low-level drivers (ADC, UART, DMA, timers)",
    "project.stm32.role.item3":
      "Implemented moving-average filtering and ring-buffer data management",
    "project.stm32.role.item4":
      "Used a logic analyzer and serial monitor for system integration and validation",
    "project.stm32.tech.title": "Tech Stack",
    "project.stm32.tech.desc":
      "MCU model, programming language, communication protocols, development tools, and hardware.",
    "project.stm32.tech.mcu.label": "MCU / Controller",
    "project.stm32.tech.mcu.value": "STM32F103C8T6 (ARM Cortex-M3)",
    "project.stm32.tech.lang.label": "Programming",
    "project.stm32.tech.lang.value":
      "C / Register + Standard Peripheral Library",
    "project.stm32.tech.comm.label": "Communication",
    "project.stm32.tech.comm.value": "UART / Modbus RTU",
    "project.stm32.tech.tool.label": "Development",
    "project.stm32.tech.tool.value": "Keil MDK, STM32CubeMX",
    "project.stm32.tech.pcb.label": "Hardware Design",
    "project.stm32.tech.pcb.value": "Altium Designer",
    "project.stm32.tech.hw.label": "Other Hardware",
    "project.stm32.tech.hw.value":
      "LM358 signal conditioning, ADS1115 external ADC, OLED display",
    "project.stm32.challenges.title": "Challenges",
    "project.stm32.challenge1.title":
      "Challenge 1 · Multi-Channel Sampling Timing Conflicts",
    "project.stm32.challenge1.body":
      "Sharing the ADC across 4 sensors introduced sampling delays. Solved by using DMA + timer triggering to achieve 4-channel round-robin sampling, stabilizing the sampling period at 1ms and reducing CPU usage to below 15%.",
    "project.stm32.challenge2.title":
      "Challenge 2 · Analog Signal Noise Suppression",
    "project.stm32.challenge2.body":
      "Electromagnetic interference on the industrial floor caused sampling jitter. Solved with hardware RC low-pass filtering plus a 16-point moving-average filter in software, reducing sampling fluctuation from ±5% to ±0.5%.",
    "project.stm32.results.title": "Results",
    "project.stm32.results.desc":
      "Quantified sampling period, fluctuation, and CPU usage.",
    "project.stm32.results.metric1.label": "Sampling Period",
    "project.stm32.results.metric1.value": "1ms / 4 channels",
    "project.stm32.results.metric2.label": "Sampling Fluctuation",
    "project.stm32.results.metric2.value": "±0.5%",
    "project.stm32.results.metric3.label": "CPU Usage",
    "project.stm32.results.metric3.value": "< 15%",
    "project.stm32.results.note":
      "Produced a reusable STM32 acquisition driver template for rapid porting in later projects",

    "project.motor.crumb": "Motor Speed Control",
    "project.motor.lead":
      "Built a DC motor mathematical model and a PID closed-loop control simulation platform to validate the dynamic response and steady-state accuracy of the speed-control strategy, providing parameter references for field commissioning.",
    "project.motor.overview.title": "Overview",
    "project.motor.overview.body1":
      "This system addresses DC motor speed-control requirements. Based on MATLAB/Simulink, a motor model and PID closed-loop simulation platform were built, including the motor model, PWM drive, encoder feedback, and PID controller, supporting speed-control validation under no-load and load-disturbance conditions.",
    "project.motor.overview.body2":
      "The core objective is to evaluate dynamic response and steady-state accuracy under different PID parameters, providing reference for practical commissioning.",
    "project.motor.role.title": "My Role",
    "project.motor.role.item1":
      "Independently completed motor modeling and Simulink simulation setup",
    "project.motor.role.item2": "Designed and tuned PID controller parameters",
    "project.motor.role.item3":
      "Analyzed dynamic response curves under no-load / load-disturbance conditions",
    "project.motor.role.item4":
      "Wrote the simulation report and parameter-tuning recommendations",
    "project.motor.tech.title": "Tech Stack",
    "project.motor.tech.desc":
      "Simulation platform, control algorithm, motor model, and related toolboxes.",
    "project.motor.tech.platform.label": "Simulation Platform",
    "project.motor.tech.platform.value": "MATLAB / Simulink R2024b",
    "project.motor.tech.algo.label": "Control Algorithm",
    "project.motor.tech.algo.value": "PID / Anti-Windup",
    "project.motor.tech.model.label": "Motor Model",
    "project.motor.tech.model.value":
      "Second-order transfer function of a DC motor",
    "project.motor.tech.tool.label": "Development Tools",
    "project.motor.tech.tool.value": "Simulink, Control System Toolbox",
    "project.motor.tech.drive.label": "Drive & Feedback",
    "project.motor.tech.drive.value": "PWM drive, encoder feedback",
    "project.motor.tech.other.label": "Other Modules",
    "project.motor.tech.other.value": "Load disturbance module",
    "project.motor.challenges.title": "Challenges",
    "project.motor.challenge1.title":
      "Challenge 1 · Motor Parameter Uncertainty",
    "project.motor.challenge1.body":
      "Actual motor parameters deviate from nominal values, causing simulation results to drift from the field. Solved by using parameter sweeps across resistance, inductance, and inertia to identify a PID parameter range with better robustness.",
    "project.motor.challenge2.title":
      "Challenge 2 · Steady-State Error Under Load Disturbance",
    "project.motor.challenge2.body":
      "Speed dropped noticeably under sudden load. Solved by introducing anti-windup and feedforward compensation, shortening speed recovery time from 1.2s to 0.4s and keeping steady-state error within ±1%.",
    "project.motor.results.title": "Results",
    "project.motor.results.desc":
      "Quantified steady-state error, disturbance recovery, and overshoot.",
    "project.motor.results.metric1.label": "Steady-State Error",
    "project.motor.results.metric1.value": "±1%",
    "project.motor.results.metric2.label": "Disturbance Recovery",
    "project.motor.results.metric2.value": "0.4s",
    "project.motor.results.metric3.label": "Overshoot",
    "project.motor.results.metric3.value": "< 5%",
    "project.motor.results.note":
      "Produced a reusable PID tuning workflow document applicable to real motor commissioning",

    "project.radar.title": "FMCW Radar Signal Processing",
    "project.radar.desc":
      "Built a 77GHz FMCW radar algorithm chain in MATLAB, covering 1D ranging, 2D velocity estimation, and 2D CA-CFAR target detection.",
    "project.radar.tag2": "FMCW",
    "project.radar.tag3": "CFAR",
    "project.radar.link": "View Details →",

    "project.radar.crumb": "FMCW Radar",
    "project.radar.lead":
      "Built a complete 77GHz FMCW radar signal processing chain in MATLAB, covering 1D ranging, 2D velocity estimation, and CA-CFAR target detection based on full physical simulation.",
    "project.radar.overview.title": "Overview",
    "project.radar.overview.body1":
      "This system constructs a complete radar signal processing algorithm chain in MATLAB based on FMCW architecture. Parameters are set at 77GHz center frequency, 4GHz bandwidth, and 50us sweep time. It extracts range information via fast-time 1D FFT, estimates Doppler velocity via 2D FFT along the slow-time dimension, and finally achieves automatic target detection and clustering in noisy environments using the 2D CA-CFAR algorithm.",
    "project.radar.role.title": "My Role",
    "project.radar.role.item1":
      "Independently derived the FMCW ranging/velocity mathematical models and radar equation.",
    "project.radar.role.item2":
      "Wrote the MATLAB script for waveform generation, free-space propagation, target reflection, and dechirp.",
    "project.radar.role.item3":
      "Implemented windowing (Hann Window) and 2D FFT spectrum analysis to construct the Range-Doppler Map.",
    "project.radar.role.item4":
      "Hand-coded the 2D CA-CFAR detector with dynamic sliding windows and threshold calculation.",
    "project.radar.tech.title": "Tech Stack",
    "project.radar.tech.desc": "Simulation platform and core algorithm chain.",
    "project.radar.tech.platform.label": "Simulation Platform",
    "project.radar.tech.platform.value":
      "MATLAB R2024b (+ Phased Array System Toolbox)",
    "project.radar.tech.algo.label": "Core Algorithms",
    "project.radar.tech.algo.value":
      "1D FFT / 2D FFT / CA-CFAR / 8-connected Clustering",
    "project.radar.tech.sys.label": "Radar System",
    "project.radar.tech.sys.value": "FMCW (77GHz Center Freq, 4GHz BW)",
    "project.radar.challenges.title": "Challenges",
    "project.radar.challenge1.title":
      "Challenge 1 · Undersampling & Range Ambiguity",
    "project.radar.challenge1.body":
      "Discovered that the preset 10MHz sampling rate could not cover a 30m target (max unambiguous range only ~18.7m) and caused spectral aliasing. Increased the complex baseband sampling rate to 4GHz through theoretical calculation, successfully resolving the true range.",
    "project.radar.challenge2.title":
      "Challenge 2 · Dynamic Threshold & Target Clustering",
    "project.radar.challenge2.body":
      "Hand-coded 2D CA-CFAR in complex noise, designing 2x2 guard cells and 4x4 training cells with a dynamic threshold multiplier based on Pfa=1e-5. To address the issue of the main lobe spanning multiple pixels, implemented power-weighted centroid clustering based on 8-connectivity, keeping only one position per target.",
    "project.radar.results.title": "Results & Visualization",
    "project.radar.results.desc":
      "Quantified results and visualizations of the algorithm chain.",
    "project.radar.results.metric1.label": "1D Range Estimation",
    "project.radar.results.metric1.value": "30.017 m (Res: 3.75 cm)",
    "project.radar.results.metric2.label": "2D Velocity",
    "project.radar.results.metric2.value": "-15.03 m/s",
    "project.radar.results.metric3.label": "CFAR Detection",
    "project.radar.results.metric3.value": "Success under Pfa=1e-5",
    "project.radar.results.note":
      "Formed a complete radar signal processing chain and generated the Range-Doppler Map.",
    "project.radar.fig1":
      "Fig 1: FMCW 1D Range Profile (Peak locked at 30.017m)",
    "project.radar.fig2":
      "Fig 2: Range-Doppler Map (Peak velocity at -15.03 m/s)",
    "project.radar.fig3":
      "Fig 3: 2D CA-CFAR Detection Results & Target Clustering",
  },
};
