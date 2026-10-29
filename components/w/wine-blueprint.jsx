import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/y/ygfyl6jya.css';
import '../../css/m/mgan7bbxd.css';
import '../../css/s/swe267bsn.css';
import '../../css/o/o6v90ru5x.css';
import '../../css/u/uxsptjbvt.css';
import '../../css/a/a3v1tnbtd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco ygfyl6jya"/><path class="mgan7bbxd wm-deco"/><path class="swe267bsn wm-deco"/><path class="o6v90ru5x wm-k"/><path class="uxsptjbvt wm-a"/><path class="a3v1tnbtd wm-k"/></g>`,
		"fallback": "withicons:wine-blueprint",
	});
}

export default Component;
