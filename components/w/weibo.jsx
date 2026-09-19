import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g7gxgs2kh.css';
import '../../css/r/r79t6gbpx.css';
import '../../css/d/dme7_ac0c.css';
import '../../css/l/ljw71xo-s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g7gxgs2kh"/><path class="r79t6gbpx"/><path class="dme7_ac0c"/><path class="ljw71xo-s"/></g>`,
		"fallback": "icon-park:weibo",
	});
}

export default Component;
