import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mj8un9ziz.css';
import '../../css/i/i_mslubyp.css';
import '../../css/y/yxo7apb0x.css';
import '../../css/c/czfh--i4a.css';
import '../../css/v/vi0yncbwm.css';
import '../../css/n/nktv6cc0k.css';
import '../../css/t/tdhzq11dq.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="mj8un9ziz"/><path class="i_mslubyp"/><path class="yxo7apb0x"/><path class="czfh--i4a"/><path class="vi0yncbwm"/><path class="nktv6cc0k"/><path class="tdhzq11dq"/>`,
		"fallback": "openmoji:zipper-mouth-face",
	});
}

export default Component;
