import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eir63y2ub.css';
import '../../css/g/gqbz4uc5i.css';
import '../../css/s/s8sam_buf.css';
import '../../css/o/ob_i77sri.css';
import '../../css/d/d1np5elpa.css';
import '../../css/n/nnssavbvj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGmUMSlbLN" x1="27.544" x2="508.824" y1="492.127" y2="-1.099" gradientTransform="matrix(1 0 0 -1 0 514)" gradientUnits="userSpaceOnUse"><stop offset="0" class="eir63y2ub"/><stop offset="1" class="gqbz4uc5i"/></linearGradient><path fill="url(#SVGmUMSlbLN)" class="s8sam_buf"/><linearGradient id="SVGRiebL4FE" x1="89.444" x2="401.764" y1="415.74" y2="100.007" gradientTransform="matrix(1 0 0 -1 0 514)" gradientUnits="userSpaceOnUse"><stop offset="0" class="ob_i77sri"/><stop offset="1" class="d1np5elpa"/></linearGradient><path fill="url(#SVGRiebL4FE)" class="nnssavbvj"/>`,
		"fallback": "selfhst:will-be-done",
	});
}

export default Component;
