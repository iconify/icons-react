import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sryjz1k4e.css';
import '../../css/b/bkz5kt0_q.css';
import '../../css/e/e5m_zh3ls.css';
import '../../css/v/vj6kdcs0y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sryjz1k4e"/><path class="bkz5kt0_q"/><path class="e5m_zh3ls"/><path class="vj6kdcs0y"/>`,
		"fallback": "fxemoji:whitehardshellfloppy",
	});
}

export default Component;
