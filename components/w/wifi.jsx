import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/e/ev_551b8w.css';
import '../../css/q/qrewj6b4l.css';
import '../../css/c/cs-jl1bwy.css';
import '../../css/a/a7s_b-m9q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="ev_551b8w"/><path clip-rule="evenodd" class="qrewj6b4l"/><path class="cs-jl1bwy"/><path clip-rule="evenodd" class="a7s_b-m9q"/></g>`,
		"fallback": "streamline-plump-color:wifi",
	});
}

export default Component;
