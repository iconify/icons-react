import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o1biaoelx.css';
import '../../css/x/xnwux-bbw.css';
import '../../css/m/mgk2zwu0h.css';
import '../../css/t/tta6kkblt.css';
import '../../css/d/drwirmbcx.css';
import '../../css/x/xhr_2_mtm.css';
import '../../css/o/o9feiwb6b.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o1biaoelx"/><path class="xnwux-bbw"/><path class="mgk2zwu0h"/><path class="tta6kkblt"/><path class="drwirmbcx"/><path class="xhr_2_mtm"/><path class="o9feiwb6b"/>`,
		"fallback": "openmoji:woman-in-steamy-room-medium-light-skin-tone",
	});
}

export default Component;
