import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ia4qhfxyu.css';
import '../../css/l/l7mjvfb2c.css';
import '../../css/k/keoezfscj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ia4qhfxyu"/><path clip-rule="evenodd" class="l7mjvfb2c"/><path class="keoezfscj"/></g>`,
		"fallback": "streamline-kameleon-color:wii-remote-duo",
	});
}

export default Component;
