import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1a_5235b.css';
import '../../css/i/i4leeu1eo.css';
import '../../css/o/ohgqkbxsq.css';
import '../../css/h/h1lunkbls.css';
import '../../css/e/euz94dluu.css';
import '../../css/t/t2hkpc30r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1a_5235b"/><path class="i4leeu1eo"/><path class="ohgqkbxsq"/><path class="h1lunkbls"/><path class="euz94dluu"/><path class="t2hkpc30r"/>`,
		"fallback": "solar:zip-file-bold-duotone",
	});
}

export default Component;
