import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g6x8mkney.css';
import '../../css/x/xv4m_lf6m.css';
import '../../css/p/pirgpnhwz.css';
import '../../css/u/unh33db8g.css';
import '../../css/q/q2cwzhi4s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g6x8mkney"/><path class="xv4m_lf6m"/><path class="pirgpnhwz"/><path class="unh33db8g"/><path class="q2cwzhi4s"/>`,
		"fallback": "energy-icons:wellhead-48",
	});
}

export default Component;
