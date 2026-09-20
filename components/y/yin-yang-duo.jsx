import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ia4qhfxyu.css';
import '../../css/e/e6n6afp3s.css';
import '../../css/k/kv8sd7f3x.css';
import '../../css/q/qptgot1uw.css';
import '../../css/m/m9_ppdbdo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ia4qhfxyu"/><path class="e6n6afp3s"/><path class="kv8sd7f3x"/><path class="qptgot1uw"/><path class="m9_ppdbdo"/></g>`,
		"fallback": "streamline-kameleon-color:yin-yang-duo",
	});
}

export default Component;
