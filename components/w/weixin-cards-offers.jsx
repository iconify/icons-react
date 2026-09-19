import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/f/f27q7-opf.css';
import '../../css/s/sdxioac2w.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGRBuYglSB"><g class="aql7dnt-u"><path class="f27q7-opf"/><path class="sdxioac2w"/></g></mask></defs><path mask="url(#SVGRBuYglSB)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:weixin-cards-offers",
	});
}

export default Component;
