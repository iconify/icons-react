import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/m_j7nzf9z.css';
import '../../css/i/i3cwa3bvh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="m_j7nzf9z"/><path class="i3cwa3bvh"/></g>`,
		"fallback": "streamline:windmill",
	});
}

export default Component;
