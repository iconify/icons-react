import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1915qdig.css';
import '../../css/z/zk4-ubrqe.css';
import '../../css/s/s7lootb5u.css';
import '../../css/i/ijonc3b4m.css';
import '../../css/r/riykjxbfq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s1915qdig"/><path class="zk4-ubrqe"/><path class="s7lootb5u"/><path class="ijonc3b4m"/><path class="riykjxbfq"/>`,
		"fallback": "selfhst:xwiki",
	});
}

export default Component;
