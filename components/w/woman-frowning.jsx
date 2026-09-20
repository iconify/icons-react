import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lc37kt10h.css';
import '../../css/p/p9hqr2biy.css';
import '../../css/g/gqsyr8btv.css';
import '../../css/b/b3xezr7mk.css';
import '../../css/u/ubef5lbps.css';
import '../../css/m/m2f4z0b-u.css';
import '../../css/b/b2jinnpae.css';
import '../../css/s/srcf0y6ld.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lc37kt10h"/><path class="p9hqr2biy"/><path class="gqsyr8btv"/><path class="b3xezr7mk"/><path class="ubef5lbps"/><path class="m2f4z0b-u"/><path class="b2jinnpae"/><path class="srcf0y6ld"/>`,
		"fallback": "openmoji:woman-frowning",
	});
}

export default Component;
