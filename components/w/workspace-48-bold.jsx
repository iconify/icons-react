import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qeucaqz1x.css';
import '../../css/q/qexfecbci.css';
import '../../css/m/m_2yb9bfa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qeucaqz1x"/><path class="qexfecbci"/><path class="m_2yb9bfa"/>`,
		"fallback": "energy-icons:workspace-48-bold",
	});
}

export default Component;
