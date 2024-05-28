import React from 'react';

import { Typography } from '..';
//import { data } from './data';
import { Accordion } from '../Accordion';
import { Button } from '../Button';
import { ConditionalWrapper } from '../ConditionalWrapper';
import { CustomContainerWrapper } from './styles';

const DataCenter = props => {
	const { onClick, data } = props;
	// TODO: Fins a better way to group this data using DP or recursion
	const grouped = data?.reduce((acc, child) => {
		acc[child?.groupName] = acc[child?.groupName] || {};

		acc[child?.groupName][child?.subGroupName] =
			acc[child?.groupName][child?.subGroupName] || {};

		acc[child?.groupName][child?.subGroupName][
			child?.fieldGroup ?? 'no-group'
		] =
			acc[child?.groupName][child?.subGroupName][
				child?.fieldGroup ?? 'no-group'
			] || [];

		acc[child?.groupName][child?.subGroupName][
			child?.fieldGroup ?? 'no-group'
		].push(child);

		return acc;
	}, {});

	console.log('grouped', { grouped });
	return (
		<CustomContainerWrapper>
			<section className="header">
				<Typography variant="headingSemiBold">Data center</Typography>

				<Typography variant="descriptionRegular">
					To use data, click on the data pills to add them into the
					respective fields
				</Typography>
			</section>

			<section className="body">
				{Object.entries(grouped)?.map(
					([groupName, groupSuggestions]) => {
						console.log({ groupName, groupSuggestions });
						return (
							<Accordion defaultExpanded key={groupName}>
								<Accordion.Summary
									key="title"
									title={groupName}
									style={{
										border: '1px solid #e6e5e6',
										borderRadius: '8px',
									}}
								/>
								<Accordion.Details key="details">
									<div className="groupList">
										{Object.entries(groupSuggestions)?.map(
											([
												subGroupName,
												subGroupSuggestions,
											]) => {
												console.log({
													subGroupName,
													subGroupSuggestions,
												});
												return (
													<ConditionalWrapper
														key={subGroupName}
														condition={
															groupName !==
															subGroupName
														}
														wrapper={children2 => (
															<Accordion
																defaultExpanded
																key={
																	subGroupName
																}
															>
																<Accordion.Summary
																	key="title2"
																	title={
																		subGroupName
																	}
																	style={{
																		border: '1px solid #e6e5e6',
																		borderRadius:
																			'8px',
																	}}
																/>
																<Accordion.Details key="details">
																	<div className="groupList">
																		{
																			children2
																		}
																	</div>
																</Accordion.Details>
															</Accordion>
														)}
													>
														{Object.entries(
															subGroupSuggestions
														)?.map(
															([
																fieldGroupName,
																fieldGroupSuggestions,
															]) => {
																console.log({
																	fieldGroupName,
																	fieldGroupSuggestions,
																});
																if (
																	fieldGroupName ==
																	''
																) {
																	return (
																		<div
																			className="groupList"
																			key={
																				fieldGroupName
																			}
																		>
																			{fieldGroupSuggestions?.map(
																				el => (
																					<Typography
																						key={
																							el.id
																						}
																						className="pill"
																						variant="descriptionMedium"
																						onClick={() =>
																							onClick(
																								el.id
																							)
																						}
																					>
																						{
																							el.display
																						}
																					</Typography>
																				)
																			)}
																		</div>
																	);
																} else {
																	return (
																		<Accordion
																			defaultExpanded
																			key={
																				fieldGroupName
																			}
																		>
																			<Accordion.Summary
																				key="title"
																				title={
																					fieldGroupName
																				}
																				style={{
																					border: '1px solid #e6e5e6',
																					borderRadius:
																						'8px',
																				}}
																			/>
																			<Accordion.Details key="details">
																				<div className="groupList">
																					{fieldGroupSuggestions?.map(
																						el => (
																							<Typography
																								key={
																									el.id
																								}
																								className="pill"
																								variant="descriptionMedium"
																								onClick={() =>
																									onClick(
																										el.id
																									)
																								}
																							>
																								{
																									el.display
																								}
																							</Typography>
																						)
																					)}
																				</div>
																			</Accordion.Details>
																		</Accordion>
																	);
																}
															}
														)}
													</ConditionalWrapper>
												);
											}
										)}
									</div>
								</Accordion.Details>
							</Accordion>
						);
					}
				)}
			</section>
		</CustomContainerWrapper>
	);
};

export default DataCenter;
