import { EC2Client, DescribeRegionsCommand } from "@aws-sdk/client-ec2";

const defaultRegion = process.env.AWS_REGION;

export const describeRegions = async (req, res) => {
  const params = {};

  const client = new EC2Client({ region: defaultRegion });
  const command = new DescribeRegionsCommand(params);

  try {
    const data = await client.send(command);

    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ error });
  }
};
