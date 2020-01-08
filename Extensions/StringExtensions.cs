using System;
using System.Security.Cryptography;
using System.Text;

namespace Protfolio.Extenstions
{
    public static class StringExtenstions
    {
        public static byte[] ToBytes(this string str) => Encoding.UTF8.GetBytes(str);

        public static string ToHexString(this byte[] bytes) => BitConverter.ToString(bytes).Replace("-", "");

        public static string SHA1Sum(this string str)
        {
            using var sha1 = SHA1.Create();
            return sha1.ComputeHash(str.ToBytes())
                .ToHexString();
        }
    }
}