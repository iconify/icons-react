import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/v8fffv6pt.css';
import '../../css/g/gz63ykb7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="v8fffv6pt"/><path class="gz63ykb7a"/></g>`,
		"fallback": "streamline-ultimate:workflow-exit-door",
	});
}

export default Component;
