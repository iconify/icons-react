import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/o/ohdiljh2u.css';
import '../../css/g/gbv6hcmjx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGQs2ujcvJ"><g class="aql7dnt-u"><path clip-rule="evenodd" class="ohdiljh2u"/><path class="gbv6hcmjx"/></g></mask></defs><path mask="url(#SVGQs2ujcvJ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:writing-fluently",
	});
}

export default Component;
