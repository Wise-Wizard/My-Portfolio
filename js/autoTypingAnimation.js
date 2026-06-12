setTimeout(function () {
  $(".about-info-inner").typed({
    strings: [
      "<span>Hello, I am Saransh Shankar.</span> I am a software engineer focused on backend systems and infrastructure. At Origin (autonomous construction robotics) I build the data and validation platform for real robots: a rosbag replay framework that gates every pull request against real field data, an always-on C++ flight recorder, and the fleet observability pipeline that makes every robot's logs searchable in seconds. Before that I shipped 10+ ecosystem integrations and a production MCP server at Camb AI, and contributed to Jaeger (CNCF) as an LFX mentee, building the OpenTelemetry metrics adapter for Jaeger V2. My research on deep-learning intrusion detection is published on IEEE Xplore. I care about systems that fail loudly, performance that is measured rather than assumed, and infrastructure boring enough to trust. I graduate in May 2026 and I am open to software engineering roles in backend, infrastructure, and platform teams. </span>",
    ],
    typeSpeed: 1,
    contentType: "html",
  });
}, 500);
