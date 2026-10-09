import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1e83_bpf.css';
import '../../css/q/qmfyblb1l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x1e83_bpf"/><path class="qmfyblb1l"/>`,
		"fallback": "energy-icons:wifi-medium-20-bold",
	});
}

export default Component;
